/* const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/outPut.txt.txt`);

//  ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

ourReadStream.pipe(ourWriteStream);
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');

    myReadStream.pipe(res);
});

// Server is listening at 3000 port

server.listen(3000);
console.log('Listening on Port 3000');
