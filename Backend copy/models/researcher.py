from pydantic import BaseModel, Field, EmailStr, HttpUrl
from typing import List, Optional
from models.base import BaseDBModel
from utils.enums import (
    ResearchArea,
    TechnologyReadinessLevel,
    ResearchIncubationSupport
)

class ResearcherScientistApplication(BaseDBModel):
    # Personal & Institutional details
    full_name: str = Field(..., example="Dr. Pradeep Kumar")
    email: EmailStr
    institution_name: str = Field(..., example="IIT Madras")
    department: str = Field(..., example="Computer Science")

    # Research info
    research_area: ResearchArea
    technology_readiness_level: TechnologyReadinessLevel

    # Yes / No fields
    patent_filed: bool
    industry_collaboration_needed: bool

    # Optional links & requirements
    publication_link: Optional[HttpUrl] = None
    lab_equipment_requirement: Optional[str] = None

    # Expected incubation support
    expected_incubation_support: List[ResearchIncubationSupport]
