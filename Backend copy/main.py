from fastapi import HTTPException
from utils.enums import ApplicantType
from schemas.msme import MSMECreate
from schemas.social import SocialEntrepreneurCreate
from schemas.researcher import ResearcherCreate

from database import application_collection



def create_application_service(data: dict):
    applicant_type = data.get("applicant_type")

    if not applicant_type:
        raise HTTPException(status_code=400, detail="Applicant type required")

    application_data = validate_and_prepare_data(applicant_type, data)

    result = application_collection.insert_one(application_data)

    return {
        "message": "Application submitted successfully",
        "application_id": str(result.inserted_id)
    }

