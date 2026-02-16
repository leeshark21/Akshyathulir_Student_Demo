from fastapi import APIRouter
from Controller.mentor_controller import get_mentor_controller

routers = APIRouter()

@routers.get("/mentor")
def get_mentor():
    return get_mentor_controller()