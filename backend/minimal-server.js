const express = require('express');

const app = express();
const port = 5001;

app.get('/test', (req, res) => {
  console.log('Received request to /test');
  res.json({ message: 'Minimal server is running' });
});

app.listen(port, () => {
  console.log(`Minimal server running on http://localhost:${port}`);
});
