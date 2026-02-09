# models/msme_application.py
from models.base import BaseDBModel
from models.msme import MSMEDetails
from models.expected_support import ExpectedSupportDetails

class MSMEApplication(BaseDBModel):
    msme_details: MSMEDetails
    expected_support: ExpectedSupportDetails
