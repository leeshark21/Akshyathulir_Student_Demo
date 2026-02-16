from database import Mentor_collection

def get_mentor_controller():
    result=[]
    mentors = Mentor_collection.find({})

    for mentor in mentors:
        mentor["_id"] = str(mentor["_id"])
        result.append(mentor)
    return result
    