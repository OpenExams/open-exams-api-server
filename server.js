const log = require('bunyan').createLogger({name: 'open-libro-bakend-server'});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('./config/database');
const app = express();

const port = process.env.PORT || 9080;
const students = require('./routes/students');
const subjects = require('./routes/subjects');

log.info('test info');
log.warn('test warn');
log.error('test error');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});


// Body Parser Middleware
app.use(bodyParser.json());
app.use(cors())

app.use('/students', students);
app.use('/subjects', subjects);

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});




