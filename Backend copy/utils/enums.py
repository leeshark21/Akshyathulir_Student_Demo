from enum import Enum

def Applicanttype(str,Enum):
    MSME = "msme"
    SOCIAL = "social_entrepreneur"
    RESEARCHER = "researcher"
    STARTUP = "startup_founder"
    STUDENT = "student_innovator"




# msme 

class BusinessRegistrationType(str, Enum):
    proprietorship = "Proprietorship"
    partnership = "Partnership"
    private_limited = "Private Limited"
    llp = "LLP"

class IndustrySector(str, Enum):
    manufacturing = "Manufacturing"
    service = "Service"
    it = "IT / Software"
    agriculture = "Agriculture"

class TurnoverRange(str, Enum):
    under_ten_lakhs = "under 10 lakhs"
    ten_to_fifty = "10 lakhs - 50lakhs"
    fifty_to_two = "50 lakhs - 2 crore"

class ExpectedSupport(str, Enum):
    funding = "Funding / Credit Support"
    market = "Market Access & Sales Support"
    technology = "Technology Upgradation"
    mentorship = "Mentorship & Business Guidance"
    government = "Government Scheme Assistance"
    legal = "Legal & Compliance Support"


# startup

class IndustryDomain(str, Enum):
    FINTECH = "FinTech"
    EDTECH = "EdTech"
    HEALTHTECH = "HealthTech"
    AGRITECH = "AgriTech"
    ECOMMERCE = "E-Commerce"
    SAAS = "SaaS"
    AI_ML = "AI / ML"
    IOT = "IoT"
    MANUFACTURING = "Manufacturing"
    OTHER = "Other"


class StartupStage(str, Enum):
    IDEA = "Idea Stage"
    PROTOTYPE = "Prototype"
    MVP = "MVP"
    EARLY_REVENUE = "Early Revenue"
    SCALING = "Scaling"


class TeamSize(str, Enum):
    SOLO = "Solo Founder"
    TWO_TO_FIVE = "2-5 Members"
    SIX_TO_TEN = "6-10 Members"
    TEN_PLUS = "10+ Members"


class FundingStatus(str, Enum):
    BOOTSTRAPPED = "Bootstrapped"
    PRE_SEED = "Pre-Seed"
    SEED = "Seed Funded"
    SERIES_A = "Series A"
    GRANT = "Grant Funded"


class RevenueModel(str, Enum):
    SUBSCRIPTION = "Subscription"
    FREEMIUM = "Freemium"
    ONE_TIME = "One-time Purchase"
    COMMISSION = "Commission-based"
    ADVERTISEMENT = "Advertisement"


class TargetMarket(str, Enum):
    B2B = "B2B"
    B2C = "B2C"
    B2B2C = "B2B2C"
    GOVERNMENT = "Government"
    GLOBAL = "Global"


class SupportNeeded(str, Enum):
    MENTORSHIP = "Mentorship & Guidance"
    FUNDING = "Funding Assistance"
    INVESTOR_CONNECT = "Investor Connect"
    TECHNICAL = "Technical Support"
    LEGAL = "Legal & Compliance"
    MARKETING = "Marketing & Sales Support"
    WORKSPACE = "Workspace / Infrastructure"


#student 



class SupportNeeded(str, Enum):
    mentorship = "Mentorship"
    prototype_development = "Prototype Development"
    funding_grant = "Funding / Grant"
    lab_access = "Lab Access"
    marketing_support = "Marketing Support"


class TeamSize(str, Enum):
    solo_founder = "Solo Founder"
    two_to_three = "2-3 Members"
    four_to_five = "4-5 Members"
    more_than_five = "More than 5"


#Social Entrepreneur


class ProblemDomain(str, Enum):
    EDUCATION = "Education"
    HEALTHCARE = "Healthcare"
    AGRICULTURE = "Agriculture"
    ENVIRONMENT = "Environment"
    SKILL_DEVELOPMENT = "Skill Development"
    WOMEN_EMPOWERMENT = "Women Empowerment"
    OTHER = "Other"


class GeographicImpact(str, Enum):
    LOCAL = "Local"
    STATE = "State"
    NATIONAL = "National"
    GLOBAL = "Global"


class IncubationSupport(str, Enum):
    FUNDING_GRANTS = "Funding / Grants"
    MENTORSHIP = "Mentorship & Guidance"
    GOVERNMENT_SCHEME = "Government Scheme Support"
    FIELD_IMPLEMENTATION = "Field Implementation Support"
    LEGAL_COMPLIANCE = "Legal & Compliance"
    MARKETING = "Marketing & Awareness"

#ResearchArea

class ResearchArea(str, Enum):
    AI_ML = "AI / Machine Learning"
    BIOTECH = "Biotechnology"
    IOT = "IoT"
    ROBOTICS = "Robotics"
    MATERIAL_SCIENCE = "Material Science"
    ENERGY = "Energy"
    HEALTHCARE = "Healthcare"
    AGRICULTURE = "Agriculture"
    OTHER = "Other"


class TechnologyReadinessLevel(str, Enum):
    TRL_1 = "TRL 1 - Basic principles observed"
    TRL_2 = "TRL 2 - Technology concept formulated"
    TRL_3 = "TRL 3 - Experimental proof of concept"
    TRL_4 = "TRL 4 - Technology validated in lab"
    TRL_5 = "TRL 5 - Technology validated in relevant environment"
    TRL_6 = "TRL 6 - Technology demonstrated in relevant environment"
    TRL_7 = "TRL 7 - System prototype demonstration"
    TRL_8 = "TRL 8 - System complete and qualified"
    TRL_9 = "TRL 9 - System proven in operational environment"


class ResearchIncubationSupport(str, Enum):
    LAB_ACCESS = "Lab Access"
    EQUIPMENT_USE = "Equipment / Facility Use"
    FUNDING_GRANTS = "Funding / Grants"
    INDUSTRY_CONNECT = "Industry Partner Connect"
    PATENT_IP = "Patent / IP Support"
    TECHNOLOGY_COMMERCIALIZATION = "Technology Commercialization"
