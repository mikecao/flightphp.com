# Stopping

You can stop the framework at any point by calling the `halt` method:

``` php?start_inline=1
Flight::halt();
```

You can also specify an optional `HTTP` status code and message:

``` php?start_inline=1
Flight::halt(200, 'Be right back...');
```

Calling `halt` will discard any response content up to that point. If you want to stop
the framework and output the current response, use the `stop` method:

``` php?start_inline=1
Flight::stop();
```
