from fastapi import APIRouter
from Controller.support_controller import post_support_controller , get_support_controller , put_support_controller

from models.applicantModel import supportRequired

routes = APIRouter()

@routes.post("/submit")
def post_support(data:supportRequired):
    return post_support_controller(data)

@routes.get("/support")
def get_support():
    return get_support_controller()


@routes.put("/submit/{support_id}")
def put_support(support_id:str,data:supportRequired):
    return put_support_controller(support_id,data)