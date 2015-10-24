var express =  require('express');
var app = express();

/* Routes */
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Node Server Running');
});