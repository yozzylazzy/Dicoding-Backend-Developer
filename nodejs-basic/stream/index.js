const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./output.txt');

readableStream.on('readable', () => {
    try {
        let chunk;
        while ((chunk = readableStream.read()) !== null) {
            writeableStream.write(chunk);
            writeableStream.write('\n');
        }
    }
    catch (error) {
        // catch the error when the chunk cannot be read.
    }
})
