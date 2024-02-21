#poetry init -n
#poetry add fastapi uvicorn
#poetry add requests
#uvicorn main:app --reload

from fastapi import FastAPI
import requests

app = FastAPI()

print("yoyoyoyo")

@app.get("/XML")
def get_express_data():
    #request expressData and serve it here
    response = requests.get("http://127.0.0.1:8080/files/CSV")
    print(response.json())
    
    return response.json()
#http://127.0.0.1:8000/XML

@app.get("/YAML")
def get_express_data():
    #request expressData and serve it here
    response = requests.get("http://127.0.0.1:8080/files/YAML")
    print(response.json())
    
    return response.json()
#http://127.0.0.1:8000/YAML

@app.get("/JSON")
def get_express_data():
    #request expressData and serve it here
    response = requests.get("http://127.0.0.1:8080/files/JSON")
    print(response.json())
    
    return response.json()
#http://127.0.0.1:8000/JSON

@app.get("/TXT")
def get_express_data():
    #request expressData and serve it here
    response = requests.get("http://127.0.0.1:8080/files/TXT")
    print(response.json())
    
    return response.json()
#http://127.0.0.1:8000/TXT

@app.get("/CSV")
def get_express_data():
    #request expressData and serve it here
    response = requests.get("http://127.0.0.1:8080/files/CSV")
    print(response.json())
    
    return response.json()
#http://127.0.0.1:8000/CSV