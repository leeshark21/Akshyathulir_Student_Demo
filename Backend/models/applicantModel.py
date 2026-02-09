from pydantic import BaseModel
from typing import List


class IndustrySector(BaseModel):
    domain: str
    sub_domains: List[str]

class supportRequired(BaseModel):
    industry_sectors: List[IndustrySector]
    
    infrastructure:List[str]=[]
    business_startup_support:List[str]=[]
    funding_financial_support:List[str]=[]
    technology_innovation:List[str]=[]
    legal_compliance:List[str]=[]
    government_ecosystem:list[str]=[]
    workspace_comfort:List[str]=[]
    connectivity_parking:List[str]=[]
    commom_facilities:List[str]=[]
    extra_offers_incubatees:list[str]=[]