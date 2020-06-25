# <a name="stopping"></a> Stopping

You can stop the framework at any point by calling the `halt` method:

``` php
Flight::halt();
```

You can also specify an optional `HTTP` status code and message:

``` php
Flight::halt(200, 'Be right back...');
```

Calling `halt` will discard any response content up to that point. If you want to stop
the framework and output the current response, use the `stop` method:

``` php
Flight::stop();
```
