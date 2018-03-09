const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const cropperjs = require('cropperjs');

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({
  extended: true
}));

var router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + '/public'));



app.listen(port, function() {
  console.log(`Server started on port: ${port}`);
});
