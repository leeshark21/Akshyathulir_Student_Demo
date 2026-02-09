from typing import List
from pydantic import BaseModel,EmailStr
from utils.enums import  IndustryDomain,StartupStage,TeamSize,FundingStatus,RevenueModel,TargetMarket,SupportNeeded

class StartupApplication(BaseModel):
    startup_name:str
    Founder:str
    email_address:EmailStr
    mobile_number:int
    industry_domain: IndustryDomain
    stage_of_startup: StartupStage
    team_size: TeamSize
    year_founded:int
    funding_status: FundingStatus
    revenue_model: RevenueModel
    target_market: TargetMarket
    website_demo_link:str
    support_needed: List[SupportNeeded]
