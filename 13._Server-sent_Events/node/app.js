import express from "express"
const app = express()

app.use(express.static("public"))

app.get("/synchronize-time", (req,res) =>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(() => {
        const time = new Date().toISOString();
        res.write(`data: ${time}\n\n`); //Skrives altid i formatet data: "data"\n\n
    }, 1000);
});

//Godt og dårligt ved SSE (Message, Open, error. message format: "data: \n\n")
//Godt: automatisk reconnect, realtime opdatering.
//Dårligt: Begrænsning af kommunikation til én vej, sender kun utf-8, mange forbindelser til serveren som kan være krævende


const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port:", PORT))



//synchronize-time