const http = require('http'); 
const url = require('url');

const port = 8000;

const requestHandler = (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(request.url);
    if (parsedUrl.query.name && parsedUrl.query.city && parsedUrl.query.age){
        response.end(`Hello, ${parsedUrl.query.name} aged ${parsedUrl.query.age} from ${parsedUrl.query.city} !`);
    }
    else if (parsedUrl.query.name && parsedUrl.query.city){
        response.end(`Hello, ${parsedUrl.query.name} from ${parsedUrl.query.city} !`);}
    else if (parsedUrl.query.name){
        response.end(`Hello, ${parsedUrl.query.name} from <city>!`);    
    }
    else if (parsedUrl.query.city){
        response.end(`Hello, <name> from ${parsedUrl.query.city}!`);    
    }
    else {response.end(`Hello, <name> from <city> !`);}
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });
