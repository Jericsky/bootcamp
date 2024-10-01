// "require" directive to load HTTP modules of node JS
// hyper text transfer protocol = data transfer between applications
/*
	Requests = message sent by the client
	Responses = messages sent by the server
*/
// 1. Create a server
// 2. Define the port number = locate where the server will listen to.
const http = require("http");

const port = 4000;

let items = ['Laptop', 'Desktop', 'Tablet']

const app = http.createServer(function (request, response) {

	// The "url" property refers to the endpoint of the url in the browser
	if (request.url == '/greeting'){
		// 200 means Ok
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('Hello Again');

	} else if (request.url == '/homepage') {
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('This is the homepage');
	} else if (request.url == '/items' && request.method === 'GET'){
		// the default HTTP method made by the browser is GET
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end(items.toString());

	}else if (request.url == '/items' && request.method === 'POST'){
		console.log(request.method);
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('This route will be used to add another item');

	} else {
		//404 means Not Found
		response.writeHead(404, {'Content-Type': 'text/plain'});

		response.end('Page not available.');
	}
	
});

app.listen(port);

console.log(`Server now accessible at localhost:${port}.`);

//HTTP Methods:
/*
	GET - used for getting data from a server
	POST - used for inputting data into a server to create a new document
	PUT - used for inputting data into a server to update a whole document
	PATCH - updating a smaller part of document
	DELETE - used to delete a document
*/