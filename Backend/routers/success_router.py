from fastapi import APIRouter
from Controller.succes_controller import get_success_controller

routers = APIRouter()

@routers.get("/success")
def get_mentor():
    return get_success_controller()