var fs = require('fs');

var card = fs.createWriteStream('log.txt', {
    flags: 'a'
})

card.write('some data \n');
card.write('more data \n');
card.write('and data');