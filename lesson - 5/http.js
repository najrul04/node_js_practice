const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World ');
        res.write('Hello World, What is up?');
        res.end();
    } else if (req.url === '/about') {
        res.write("Oi! That's about us page!");
        res.end();
    } else {
        res.write('wass upppp Not Hereeeee');
        res.end();
    }
});

// Server is listening at 3000 port

server.listen(3000);
console.log('Listening on Port 3000');
