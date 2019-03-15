const express = require('express');
const path = require('path');

// Require routes
const indexRoute = require('./routes/index.js');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));