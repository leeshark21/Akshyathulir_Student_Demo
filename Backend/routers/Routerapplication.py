from fastapi import APIRouter
from models.applicantModel import supportRequired
from database import support_collection


router = APIRouter()

@router.post('/support/submit')
def support_requiredcreate(data:supportRequired):
    result = support_collection.insert_one(data.dict())
    return {
        'message':'successfully store data',
        'id':str(result.inserted_id)
    }

@router.get('/support')
def get_support_require():
    request=[]
    support = support_collection.find_one(sort=[("_id", -1)])
    if support:
        support['_id'] = str(support['_id'])
        request.append(support)
    return request

