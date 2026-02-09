from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from models.base import BaseDBModel
from utils.enums import (
    ProblemDomain,
    GeographicImpact,
    IncubationSupport
)

class SocialEntrepreneurApplication(BaseDBModel):
    # Basic details
    initiative_name: str = Field(..., example="Green Future Initiative")
    founder_name: str = Field(..., example="Pradeep Kumar")
    email: EmailStr
    mobile_number: str = Field(..., min_length=10, max_length=15)

    # Domain & beneficiaries
    problem_domain: ProblemDomain
    target_beneficiaries: str = Field(..., example="Rural farmers")

    # Impact
    geographic_impact: GeographicImpact
    has_ngo_government_partnership: bool

    # Descriptions
    social_impact_description: str
    revenue_sustainability_model: str

    # Expected support
    expected_incubation_support: List[IncubationSupport]
