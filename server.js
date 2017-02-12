var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(8008);

console.log('Server started at http://localhost:8008'); 