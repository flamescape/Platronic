var express = require('express')
  , app = express()
  , browserify = require('browserify')
  ;

app.use(express.static('public'));

app.get('/client.js', function(req, res){
    var b = browserify();
    b.add('./client.js');
    b.bundle(function(err, bundle){
        if (err) {
            console.log('Error bundling client JS', err);
            return res.send(500, err);
        }
        res.send(bundle);
    });
});

app.listen(80);
