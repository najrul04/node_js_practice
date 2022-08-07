const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action ="/process"><input name="message"/></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Finished stream');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write("Oi Twat! Ain't here to say thanks for your submitting arse! Fucking Cunt!!");
            res.end();
        });
    } else {
        res.write('wass upppp Not Hereeeee');
        res.end();
    }
});

// Server is listening at 3000 port

server.listen(3000);
console.log('Listening on Port 3000');
