var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

app.get('/res', function (req, res) {
	webshot('http://127.0.0.1:8080', 'pentacode.png', options, function(err) {
		if (!err) {
			console.log('Screenshot taken!');
		}
		res.sendFile('/app/d3-floorplan-sample/pentacode.png');
	});
	//res.sendFile('/app/d3-floorplan-sample/pentacode.png');
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
