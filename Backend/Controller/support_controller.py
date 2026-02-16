from database import support_collection
from models.applicantModel import supportRequired
from bson import ObjectId

def post_support_controller(data:supportRequired):
    result= support_collection.insert_one(data.model_dump())
    return {
        "message":"successfully store data",
        "id":str(result.inserted_id)
    }

def get_support_controller():
    support = support_collection.find_one(sort=[("_id",-1)])
    request =[]
    if support:
        support["_id"] =str(support["_id"])
        request.append(support)
    return request



def put_support_controller(support_id: str,data:supportRequired):
    result = support_collection.update_one(
        {"_id": ObjectId(support_id)},
        {"$set":data.model_dump()}
    )
    if result.matched_count==0:
        return {"message":"not foung"}
    
    return {"message" : "update successfully"}
