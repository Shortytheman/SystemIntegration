import express from "express"
import userRouter from '../../lektier_02/server.js';

const app = express()   
const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))

//Router Setup
app.use("/files", userRouter)




//Endpoints examples:
//XML = http://localhost:8080/files/XML
//YAML = http://localhost:8080/files/YAML
//JSON = http://localhost:8080/files/JSON
//TXT = http://localhost:8080/files/TXT
//CSV = http://localhost:8080/files/CSV