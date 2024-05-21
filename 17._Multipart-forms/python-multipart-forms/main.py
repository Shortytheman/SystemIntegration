from fastapi import FastAPI, Form, File, UploadFile
import aoifiles
from typing import Optional


app = FastAPI()


@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username, password)
    return { "username": username }

#@app.post("/fileform")
#def file_form(file: bytes = File(...)):
#    #return {"file_size": len(file)}
#    with open(file, 'wb') as f:
#        f.write(file)

#    return { "message": "File Uploaded" }

@app.post("/fileform")
async def file_form(file: UploadFile = File(...), description: Optional(str) = Form(None)):
    save_filename = file.filename.replace("/","_").replace("\\","_") #Sikkerhed, for ikke at vise filstier

    async with aiofiles.open(save_filename, 'wb') as f: #aoifiles = async
            #Walrus operator
        while content := await file.read(1024): #Read in 1024 chunks
            await f.write(content)



#    contents = await file.read()
#    print(contents)
#
#    return { "filename": file.filename };