const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/outPut.txt.txt`);

ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});
