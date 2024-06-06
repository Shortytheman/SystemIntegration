from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates #Minder og thymeleaf
from fastapi.responses import StreamingResponse #Event-stream med "keep-alive"
from datetime import datetime
import asyncio
import uvicorn


#uvicorn main:app --reload --host 127.0.0.1 --port 8000

app = FastAPI()

templates = Jinja2Templates(directory="templates")


@app.get("/")
def serve_root_page(request: Request):
    return templates.TemplateResponse("index.html", { "request" : request} )

async def data_generator():
    while True:
        now = datetime.now().strftime("%Y-%m-%d %H-%M-%S")
        yield f"data:{now}\n\n"
        await asyncio.sleep(1)

@app.get("/sse")
def sse():
    return StreamingResponse(data_generator(), media_type="text/event-stream")

@app.get("/emil")
def get_joke():
    return "Der var engang en..."

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)