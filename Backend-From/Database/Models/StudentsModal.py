from pydantic import BaseModel,EmailStr
from typing import List

class Students(BaseModel):
    full_name : str
    email : EmailStr
    mobile : str
    college_university:str
    course_year:str
    describe_problem:str
    innovative_solution:str
    technology_use:str
    support_needed: List[str]
    team_size:str
    faculty:str