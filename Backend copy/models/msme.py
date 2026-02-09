from pydantic import BaseModel,EmailStr
from utils.enums import (
    BusinessRegistrationType,
    IndustrySector,
    TurnoverRange
)

class MSMEDetails(BaseModel):
    business_name: str
    owner_name: str
    email: EmailStr
    mobile_number: str

    business_registration_type: BusinessRegistrationType
    msme_registration_number: str | None = None

    industry_sector: IndustrySector
    years_of_operation: int
    number_of_employees: int
    annual_turnover_range: TurnoverRange