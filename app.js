var async = require('async');
var app = require('express').createServer();

var fibonacci = function(n, callback) {
    if (n <= 2) {
        callback(null, 1);
        return;
    }
    async.series({
        n2: function(next) {
            process.nextTick(function() { fibonacci(n - 2, next); });
        },
        n1: function(next) {
            process.nextTick(function() { fibonacci(n - 1, next); });
        },
    }, function(err, results) {
        callback(null, results.n1 + results.n2);
    });
}
fibonacci = async.memoize(fibonacci);

app.get('/:n', function(req, res) {
    fibonacci(req.params.n, function(err, number) {
        res.send(''+number);
    });
});


app.listen(3000);
