# node-fib

A little express server that gives you back whatever fibonacci number you ask for

## Coming here from Hacker News?

Hello there! You've stumbled across a short script I wrote to see how effective a
non-blocking implementation would be for the famous NodeJS cancer also known as
calculating the fibonacci sequence recursively.

They key differences from the original algorithm are that process.nextTick is used
agressively (probably too agressively), so ensure that the main event loop is not
blocked. In addition, memoisation is used which is shared across concurrent and
subsequent requests without having to worry about locking.

Obviously there are other algorithms to calculate the nth term of the fibonacci
sequence, many of which will be more effective than this one (although I do like
how easy it is to memoise this). Some people have already mentioned a few of these
in the issues section. As this is a toy rather than a real project I'm unlikely
to implement these improvements unless they sound particularly fun or I have some
time to kill on a train.

I would encourage anyone with suggestions of improvements to have a go at them
yourself, especially if you're not familiar with NodeJS - you may even like it.
I would also encourage any similar implementations in non-reactor frameworks as
a comparison of the relative merits and disadvantages of event loops vs threads.

## Usage

    node app.js &
    curl localhost:3000/40

Replace 40 with whatever fibonacci number you want

## Why?

To point out that implementation of whatever you're doing is far more important
than which framework you're using, or whether you're using threads or an event
loop to handle concurrency.

## Is it any good?

Yes.

    > ab -n 10000 -c 50 'http://127.0.0.1:3000/100'
    This is ApacheBench, Version 2.3 <$Revision: 655654 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking 127.0.0.1 (be patient)
    Completed 1000 requests
    Completed 2000 requests
    Completed 3000 requests
    Completed 4000 requests
    Completed 5000 requests
    Completed 6000 requests
    Completed 7000 requests
    Completed 8000 requests
    Completed 9000 requests
    Completed 10000 requests
    Finished 10000 requests


    Server Software:
    Server Hostname:        127.0.0.1
    Server Port:            3000

    Document Path:          /100
    Document Length:        21 bytes

    Concurrency Level:      50
    Time taken for tests:   2.114 seconds
    Complete requests:      10000
    Failed requests:        0
    Write errors:           0
    Total transferred:      1420000 bytes
    HTML transferred:       210000 bytes
    Requests per second:    4731.49 [#/sec] (mean)
    Time per request:       10.568 [ms] (mean)
    Time per request:       0.211 [ms] (mean, across all concurrent requests)
    Transfer rate:          656.12 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.3      0       5
    Processing:     2   10   3.0     10      28
    Waiting:        2   10   3.0     10      28
    Total:          3   10   3.0     10      28

    Percentage of the requests served within a certain time (ms)
      50%     10
      66%     11
      75%     12
      80%     13
      90%     14
      95%     15
      98%     18
      99%     20
     100%     28 (longest request)


## Related

Derivative project in python-twisted: https://github.com/zed/txfib