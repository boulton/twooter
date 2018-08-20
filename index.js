var http = require('http');
var fs = require('fs');
var Twitter = require('twitter-node-client').Twitter;
var path = require('./data/twitter_config.json')

var body = '0';
var twitter = new Twitter(path);
//Callback functions

var error = function (err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function (data) {
	body = data;
	JSON.parse(data).forEach(elem => console.log(elem.text))
	//console.log(data);
};

twitter.getHomeTimeline({count: '1'}, error, success);
http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(body);
}).listen(8081);