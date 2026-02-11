from pydantic import BaseModel

class Mentor(BaseModel):
    name:str
    expertise:str
    startupsAssigned:int
    session:int
    engagementLevel:str
    status:str
    