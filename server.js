const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./routes/api');

const cors = require('cors');

require('dotenv').config()

// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, OPTIONS, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  res.setHeader(
    "Access-Control-Allow-Credentials",
    true
  );
  next();
})

app.use('/api', api);
app.get('/', function (req, res) {
  res.send('Server is up and running')
})

const port = process.env.PORT || 5000

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`)
})