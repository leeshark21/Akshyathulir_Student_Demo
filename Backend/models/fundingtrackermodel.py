from pydantic import BaseModel

class funding(BaseModel):
    startupName:str
    stage:str
    allocated:int
    utilized:int
    remaining:int
    burnStatus:str