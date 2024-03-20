import express from "express";

const app = express()

app.use(express.static("public")) //Automatically served on "/" if the name is index.html

const randomNumbers = [42, 420, 1337];


app.get("/randomNumbers", (req,res) => {
    res.send({ data: randomNumbers })
})

app.post("/simulateNewRandomNumbers", (req,res) => {
    const newNumber = getRandomInt(3,1001)
    randomNumbers.push(newNumber);
    res.send({ data: newNumber })
})

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}


const PORT = 8080
app.listen(PORT, () => console.log("Port is running on port", PORT))