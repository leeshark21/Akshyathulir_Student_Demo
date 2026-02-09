from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional

from models.base import BaseDBModel
from utils.enums import SupportNeeded, TeamSize


class IdeaApplication(BaseModel):
    # Personal Details
    full_name: str = Field(..., example="Pradeep Kumar")
    email: EmailStr
    mobile_number: str = Field(..., example="9876543210")
    college_or_university: str
    course_and_year: str

    # Idea Details
    idea_title: str = Field(..., example="AI-based MSME Assistant")
    problem_statement: str = Field(..., example="MSMEs struggle with digital adoption")
    innovative_solution: str
    technology_used: str

    # Support & Team
    support_needed: List[SupportNeeded]
    team_size: TeamSize
    faculty_mentor: Optional[str] = Field(None, example="Dr. Ravi Kumar")
