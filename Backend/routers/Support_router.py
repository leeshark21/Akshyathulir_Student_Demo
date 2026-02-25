from fastapi import APIRouter
from Controller.support_controller import post_support_controller , get_support_controller , patch_support_controller

from models.applicantModel import supportRequired

routes = APIRouter()

@routes.post("/submit")
def post_support(data:supportRequired):
    return post_support_controller(data)

@routes.get("/support/{id}")
def get_support(id):
    return get_support_controller(id)


@routes.patch("/submit/{support_id}")
def put_support(support_id:str,data:supportRequired):
    return patch_support_controller(support_id,data.dict())




