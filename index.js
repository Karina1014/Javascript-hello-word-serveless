const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! This message is generated using JavaScript without Dockerfile');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
