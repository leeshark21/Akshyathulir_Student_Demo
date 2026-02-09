# models/expected_support.py
from pydantic import BaseModel
from typing import List
from utils.enums import ExpectedSupport

class ExpectedSupportDetails(BaseModel):
    supports: List[ExpectedSupport]
