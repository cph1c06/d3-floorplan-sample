var express = require('express');
var webshot = require('webshot');

var app = express();
var port = process.env.PORT || 8080;
var options = {
	renderDelay: '6000'
}

// Serve static files
//app.use(express.static(__dirname + '/public'));
app.use('/public',express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	webshot('http://127.0.0.1:8080/public', 'pentacode.png', options, function(err) {
		if (!err) {
			console.log('Screenshot taken!');
		}
		res.sendFile('/app/pentacode.png');
	});
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
