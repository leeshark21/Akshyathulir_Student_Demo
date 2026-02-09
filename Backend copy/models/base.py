from pydantic import BaseModel,Field
from typing import List
from datetime import datetime
from utils.enums import Applicanttype
from models.base import BaseDBModel
from models.support import SupportSection

class ApplicationBase(BaseDBModel):
    applicanttype: Applicanttype
    type_of_support_required: List[SupportSection]= Field(default_factory=list)
    specialized_institutional_support:List[SupportSection]= Field(default_factory=list)
    support_required:List[SupportSection]= Field(default_factory=list)
    additional_service:List[SupportSection]= Field(default_factory=list)
    created_at: Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
