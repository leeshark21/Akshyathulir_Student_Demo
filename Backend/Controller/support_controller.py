from database import support_collection
from models.applicantModel import supportRequired
from bson import ObjectId

def post_support_controller(data: supportRequired):
    result = support_collection.insert_one(data.model_dump())
    return {
        "message": "successfully store data",
        "id": str(result.inserted_id)
    }

def get_support_controller(id: str):
    try:
        support = support_collection.find_one({"_id": ObjectId(id)})
        if support:
            support["_id"] = str(support["_id"])
            return support
        return {"error": "Not found"}
    except Exception as e:
        return {"error": str(e)}

def patch_support_controller(id: str, support: dict):
    try:
        updatedata = {k: v for k, v in support.items() if k != "_id"}
        result = support_collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": updatedata}
        )
        if result.matched_count == 0:
            return {"error": "Data not found"}
        return {"message": "updated successfully"}
    except Exception:
        return {"error": "Invalid ID format"}






