from database import Funding_Tracker

def get_funding_controller():
    result=[]

    fundigs =Funding_Tracker.find({})

    for funds in fundigs:
        funds["_id"] = str(funds["_id"])
        result.append(funds)
    return result