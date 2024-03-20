import express from "express"

const app = express()

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/githubwebhookjson",(req,res) => {
    console.log(req.body);
    res.sendStatus(204);
});


app.post("/githubwebhookform", (req,res) => {
    console.log(req.body);
    res.sendStatus(204);
});

app.listen(8080, () => console.log("Server running on port ", PORT))

