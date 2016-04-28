# Error Handling

## Errors and Exceptions

All errors and exceptions are caught by Flight and passed to the `error` method.
The default behavior is to send a generic `HTTP 500 Internal Server Error`
response with some error information.

You can override this behavior for your own needs:

``` php?start_inline=1
Flight::map('error', function(Exception $ex){
    // Handle error
    echo $ex->getTraceAsString();
});
```

By default errors are not logged to the web server. You can enable this by
changing the config:

``` php?start_inline=1
Flight::set('flight.log_errors', true);
```

## Not Found

When a URL can't be found, Flight calls the `notFound` method. The default
behavior is to send an `HTTP 404 Not Found` response with a simple message.

You can override this behavior for your own needs:

``` php?start_inline=1
Flight::map('notFound', function(){
    // Handle not found
});
```