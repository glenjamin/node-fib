# node-fib

A little express server that gives you back whatever fibonacci number you ask for

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
    Time taken for tests:   1.855 seconds
    Complete requests:      10000
    Failed requests:        0
    Write errors:           0
    Total transferred:      1420000 bytes
    HTML transferred:       210000 bytes
    Requests per second:    5390.22 [#/sec] (mean)
    Time per request:       9.276 [ms] (mean)
    Time per request:       0.186 [ms] (mean, across all concurrent requests)
    Transfer rate:          747.47 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.2      0       4
    Processing:     1    9   4.7      9      26
    Waiting:        1    9   4.7      9      26
    Total:          1    9   4.7      9      26

    Percentage of the requests served within a certain time (ms)
      50%      9
      66%     11
      75%     13
      80%     14
      90%     15
      95%     16
      98%     19
      99%     22
     100%     26 (longest request)
