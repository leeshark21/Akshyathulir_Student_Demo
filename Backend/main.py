from fastapi import FastAPI
from routers.Support_router import routes as Support_router
from routers.success_router import routers as success_router
from routers.program_router import routers as program_router
from routers.mentor_router import routers as mentor_router
from routers.funding_router import routers as funding_router


from fastapi.middleware.cors import CORSMiddleware





app=FastAPI(title='Incubation center API')



@app.get('/')
def root():
    return {
        'message':'Incubation backend is Running'
    }


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']

    
)

app.include_router(Support_router)

app.include_router(funding_router)

app.include_router(mentor_router)

app.include_router(program_router)

app.include_router(success_router)


