from fastapi import APIRouter
from models.applicantModel import supportRequired
from database import support_collection
from database import Mentor_collection
from models.mentornetwork import Mentor 
from database import Program_collection

from database import Funding_Tracker

from database import success_outcomes

from models.programmodel import Program


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


@router.get('/programs')
def get_program():
    request2=[]
    

    programs = Program_collection.find({})
    for program in programs:
        program["_id"] = str(program["_id"])
        request2.append(program)
    return request2


@router.post('/programs')
async def post_program(data:Program):
    data1 =Program_collection.insert_one(dict(data))
    return  {
        'id':str(data1.inserted_id)
    }

    

@router.get('/funding')
def get_fund():
    request3=[]

    Fundings = Funding_Tracker.find({})
    for funds in Fundings:
        funds['_id']=str(funds['_id'])
        request3.append(funds)


    return request3


@router.get('/success')
def get_success():
    request4=[]

    sucess = success_outcomes.find({})
    for item in sucess:
        item['_id']=str(item['_id'])
        request4.append(item)


    return request4