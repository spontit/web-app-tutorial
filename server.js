const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.get('/hello', (req, res) => {
  return res.send('Hello World!')
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);