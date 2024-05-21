from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

class Spacecraft(BaseModel):
    id: int
    name: str

spacecrafts = [
    Spacecraft(id= 1,name="Apollo 13"),
    Spacecraft(id= 2,name="hubble"),
    Spacecraft(id= 3,name="ISS"),
    Spacecraft(id= 4,name="voyager")
]

router = APIRouter()

@router.get("/api/spacecrafts")
async def _():
    return spacecrafts

@router.get("/spacecraft", tags=["spacecrafts"], response_model=list[Spacecraft])
async def read_spacecraft():
    return {"spacecraft": "yo"}

@router.get("/api/spacecrafts/{spacecraft_id}", tags=["spacecrafts"], response_model=Spacecraft)
async def _(spacecraft_id: int):
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
            return spacecraft
    raise HTTPException(status_code=404, detail="Spacecraft not found")

import json

#@app.on.event("startup")
