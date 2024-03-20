import express from "express"


const app = express()   
const PORT = 1337
app.listen(PORT, () => console.log("Server is running on port", PORT))

app.get('/date', async (req, res) => {

    const data = await fetch("https://d04c-195-249-146-100.ngrok-free.app/getDate")
    
    const date = await data.json()

    const actualDate = date["date"]
    
    res.send(`<p>${actualDate}</>`)

    
});