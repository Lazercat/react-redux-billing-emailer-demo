const express = require('express');
const app = express();

app.get('/', (res, req) => {
  res.send('peaches');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
