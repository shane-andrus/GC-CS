const http = require('http');
const fs = require('fs');

const Database = require("./database");

Database.createTestTable();
Database.addRowToDatabase({name: "Shane Andrus", description: "I made this in 30 mins"});

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        res.write('<html><body><p>This is home page.</p><a href="/bhg">This is a mystey link!</a></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student page.</p><p>Wesley has been here.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {   
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/bhg") { // bhg is brohousegames which is my website (https://brohouse.dev)
        Database.addRowToDatabase({name: "Wesley Olson", description: "I like this website"});
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fs.readFileSync(__dirname + '/bhg/index.html'));
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')