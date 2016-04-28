# Configuration

You can customize certain behaviors of Flight by setting configuration values
through the `set` method.

``` php?start_inline=1
Flight::set('flight.log_errors', true);
```

The following is a list of all the available configuration settings:

    flight.base_url - Override the base url of the request. (default: null)
    flight.case_sensitive - Case sensitive matching for URLs. (default: false)
    flight.handle_errors - Allow Flight to handle all errors internally. (default: true)
    flight.log_errors - Log errors to the web server's error log file. (default: false)
    flight.views.path - Directory containing view template files. (default: ./views)
    flight.views.extension - View template file extension. (default: .php)