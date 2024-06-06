import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 });

//full duplex bi-directional real-time communication via Websocket protocol instead of HTTP.

wss.on('connection', (ws) => {
  console.log('Client connected');
  

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`); //Line from client: ws.send("Hello, Server!")
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server listening on port 8080');

