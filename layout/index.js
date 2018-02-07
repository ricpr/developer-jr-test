var express = require('express');
var app = express();

app.use('/', express.static('htdocs'));

app.listen(3099, function() {
	console.log('listen on http://localhost:3099');
});
