from pydantic import BaseModel

class Program(BaseModel):
    programName:str
    cohortYear:int
    completionRate:int
    survivalRate:int
    kpiScore:int
    status:str