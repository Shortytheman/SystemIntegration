import express from "express"
const app = express()

app.use(express.static("public"))

const jokes = ["Why don't scientists trust atoms? Because they make up everything", "Why did the scarecrow win an award? Because he was outstanding in his field", "Why don't skeletons fight each other? They don't have the guts", "Why did the bicycle fall over? Because it was two-tired", "Why did the golfer bring two pairs of pants? In case he got a hole in one", "Why was the math book sad? Because it had too many problems", "What do you call fake spaghetti? An impasta", "How do you organize a space party? You planet", "Why don’t eggs tell jokes? They’d crack each other up", "Why was the computer cold? It left its Windows open"]


let jokeIndex = 0;


app.get("/get-joke", (req,res) =>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(() => {
        const joke = jokes[jokeIndex];
        res.write(`data: ${joke}\n\n`); 
        jokeIndex = (jokeIndex + 1) % jokes.length; 
    }, 5000);
});

//Godt og dårligt ved SSE (Message, Open, error. message format: "data: \n\n")
//Godt: automatisk reconnect, realtime opdatering.
//Dårligt: Begrænsning af kommunikation til én vej(simplex/duplex), sender kun utf-8, mange forbindelser til serveren som kan være krævende


const PORT = 8080
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))