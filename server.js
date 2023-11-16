const express = require('express');
const next = require('next');
const openaibot = require('./server/openai');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your Express API routes here
  server.get('/api/data', async (req, res) => {
    // Implement your API logic here
    const data = await openaibot.getChatResponse();
    console.log(data)
    res.json(data);
  });

  // Handle all other requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready Express on http://localhost:3000');
  });
});
