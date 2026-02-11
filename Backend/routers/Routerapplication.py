from fastapi import APIRouter
from models.applicantModel import supportRequired
from database import support_collection
from database import Mentor_collection
from models.mentornetwork import Mentor

router = APIRouter()

@router.post('/support/submit')
def support_requiredcreate(data:supportRequired):
    result = support_collection.insert_one(dict(data))
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

@router.get('/mentors')
def get_mentors():
    request1 = []

    mentors = Mentor_collection.find({})  

    for mentor in mentors:
        mentor['_id'] = str(mentor['_id']) 
        request1.append(mentor)

    return request1



@router.post('/mentors')
async def get_mentors1(data:Mentor):
    data1 =Mentor_collection.insert_one(dict(data))
    return  {
        'id':str(data1.inserted_id)
    }
    

