# app/routers/application.py

from fastapi import APIRouter, Request
from services.application_service import create_application_service

router = APIRouter(prefix="/applications", tags=["Applications"])

@router.post("/")
async def create_application(request: Request):
    data = await request.json()
    return create_application_service(data)

