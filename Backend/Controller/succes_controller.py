from database import success_outcomes

def get_success_controller():
    success = success_outcomes.find({})
    result =[]


    for suc in success:
        suc["_id"] = str(suc["_id"])
        result.append(suc)
    return result
