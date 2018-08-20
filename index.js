var http = require('http');
var Twitter = require('twitter-node-client').Twitter;


var twitter = new Twitter();
//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function (data) {
	console.log('Data [%s]', data);
};


console.log(twitter.getHomeTimeline({
	count: '10'
}, error, success));
http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World!');
}).listen(8081);