const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/lectures', (req, res) => {
  const data = fs.readFileSync('lectures.json', 'utf-8');
  res.json(JSON.parse(data));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
