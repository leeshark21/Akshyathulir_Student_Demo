from fastapi import APIRouter
from Controller.fundig_controller import get_funding_controller
routers = APIRouter()

@routers.get("/funding")
def get_funding():
    return get_funding_controller()