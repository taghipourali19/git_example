const express = require('express');

let app = express();
const port = 1500;

app.get('/', (req, res) => {
  res.send('ld;fsdl');
});

app.listen(port, () => {
  console.log(`is running on port ${port}`);
});
