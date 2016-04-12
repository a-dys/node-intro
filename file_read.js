/**
 * Created by adys on 12.04.16.
 */
var fs = require('fs');

fs.readFile('index.html', function(err, contents) {
    console.log(contents);
});