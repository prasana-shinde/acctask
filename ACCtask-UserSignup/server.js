const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const routes = require('./routes');

app.listen(8080);       //starting server on port 8080
app.use('/',express.static(__dirname + '/static'));     //serving the static files
app.use(bodyparser.urlencoded({extended:true}));        
app.use(bodyparser.json());     //parsing the encoded body data
app.use('/api',routes);
