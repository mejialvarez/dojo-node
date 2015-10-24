var express =  require('express');
var app = express();
var hbs = require('hbs');

/* Set template engine */
app.set('view engine', 'html');
app.engine('html', hbs.__express);

/* Routes */
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log('Node Server Running');
});