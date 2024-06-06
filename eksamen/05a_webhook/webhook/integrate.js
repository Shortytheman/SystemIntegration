import express from 'express';

const app = express();
app.use(express.json());

app.post("/payload", (req, res) => {
    console.log(req.body);
});

const PORT = 1337;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });