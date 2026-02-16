from fastapi import APIRouter
from Controller.program_controller import get_program_collection

routers = APIRouter()

@routers.get("/program")
def get_mentor():
    return get_program_collection()