from fastapi import APIRouter,HTTPException
from  Database.Models.StudentsModal import Students
from Database.configuration import collection



router = APIRouter()

@router.post('/student')
async def create_student(student:Students):
    try:
        res = collection.insert_one(dict(student))
        if not res.inserted_id:
            raise HTTPException(status_code=400,detail='error')
        return {'id':str(res.inserted_id),'message':'successfully inserted'}
    except Exception as e:
            raise HTTPException(status_code=500,detail=f'{e}')

