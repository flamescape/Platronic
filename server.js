var express = require('express')
  , app = express()
  , browserify = require('browserify')
  , program = require('commander')
  ;

program.option('-p, --port <n>', 'The port number', parseInt).parse(process.argv);
program.port = program.port || 80;

app.use(express.static('public'));

app.get('/client.js', function (req, res) {
    var b = browserify();
    b.add('./client.js');
    b.bundle(function (err, bundle) {
        if (err) {
            console.log('Error bundling client JS', err);
            return res.send(500, err);
        }
        res.set('Content-Type', 'text/javascript');
        res.send(200, bundle);
    });
});

app.listen(program.port);
console.log('Now listening on port: ' + program.port);
