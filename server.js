var mongo = require('mongodb').MongoClient,
client = require('socket.io').listen(8080).sockets;

mongo.connect('mongodb://127.0.0.1/chat', function(err, db) {
	// if(err){ throw err;}
	
	// Listen for connection
	client.on('connection', function(socket) {
		
		var myCol = db.collection('messages');
		
		// Wait for input
		socket.on('myInput', function(data) {
			var name = data.name,
			message = data.message;
			
			myCol.insert({name: name, message: message}, function() {
				console.log('inserted');
			});
			
		});
	
	});
	
});


