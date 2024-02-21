from fastapi import FastAPI

#Express for python

app = FastAPI()

#Command: uvicorn main:app (--reload)

@app.get("/") #Navne: root, eller _
def root():
    return { "message": "Hello world." }

@app.get("/firstroute")
def firstroute():
    return { "message" : "yo"}

