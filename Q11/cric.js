const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const getLiveCricketScores = () => {
  return [
    { team1: 'Team A', team2: 'Team B', score: '100-80' },
    { team1: 'Team C', team2: 'Team D', score: '120-110' },
  ];
};

const broadcastLiveCricketScores = () => {
  const scores = getLiveCricketScores();
  const data = JSON.stringify(scores);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('New client connected');
  const scores = getLiveCricketScores();
  ws.send(JSON.stringify(scores));
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  setInterval(broadcastLiveCricketScores, 5000);
});