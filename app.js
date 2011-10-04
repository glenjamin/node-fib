var app = require('express').createServer();

var fibonacci = function(n, callback) {
    var inner = function(n1, n2, i) {
        if (i > n) {
            callback(null, n2);
            return;
        }
        var func = (i % 100) ? inner : inner_tick;
        func(n2, n1 + n2, i + 1);
    }
    var inner_tick = function(n1, n2, i) {
        process.nextTick(function() { inner(n1, n2, i); });
    }
    if (n == 1 || n == 2) {
        callback(null, 1);
    } else {
        inner(1, 1, 3);
    }
}

/*** For reference, and to save you looking at the revision history,
 *   this is the previous implementation.

var async = require('async');
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
 */

app.get('/:n', function(req, res) {
    fibonacci(req.params.n, function(err, number) {
        res.send(''+number);
    });
});


app.listen(3000);
