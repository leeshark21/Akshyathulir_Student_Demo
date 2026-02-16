from database import Program_collection

def get_program_collection():

    programs = Program_collection.find({})

    resprogram=[]

    for program in programs:
        program["_id"] = str(program["_id"])
        resprogram.append(program)

    return resprogram


