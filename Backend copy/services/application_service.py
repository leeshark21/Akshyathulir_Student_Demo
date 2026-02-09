from fastapi import HTTPException
from utils.enums import ApplicantType
from schemas.msme import MSMECreate
from schemas.social import SocialEntrepreneurCreate
from schemas.researcher import ResearcherCreate
from schemas.startup import StartupCreate
from schemas.student import StudentCreate
from database import application_collection
from datetime import datetime



def create_application_service(data: dict):
    applicant_type = data.get("applicant_type")

    if not applicant_type:
        raise HTTPException(status_code=400, detail="Applicant type is required")

    application_data = validate_and_prepare_data(applicant_type, data)

    result = application_collection.insert_one(application_data)

    return {
        "message": "Application submitted successfully",
        "application_id": str(result.inserted_id),
        "applicant_type": applicant_type
    }