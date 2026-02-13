from fastapi import FastAPI
from routers.Routerapplication import router
from fastapi.middleware.cors import CORSMiddleware





app=FastAPI(title='Incubation center API')

app.include_router(router)

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


