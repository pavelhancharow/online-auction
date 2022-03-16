import { WebSocket } from 'ws';
import { connectionHandler } from './lotController';

export default (ws: WebSocket) => {
  ws.on('message', async (msg) => {
    const data = JSON.parse(msg.toString('utf8'));
    await connectionHandler(ws, data);
  });

  ws.on('close', () => {
    ws.send('WebSocket was closed');
  });
};
