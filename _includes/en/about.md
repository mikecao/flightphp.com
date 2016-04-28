# What is Flight?

Flight is a fast, simple, extensible framework for PHP.
Flight enables you to quickly and easily build RESTful web applications.

``` php?start_inline=1
require 'flight/Flight.php';

Flight::route('/', function(){
  echo 'hello world!';
});

Flight::start();
```

[Learn more]({{page.lang|prepend:'/'|replace:'/.',''}}/learn)

# Requirements

Flight requires PHP 5.3 or greater.

# License

Flight is released under the [MIT](https://github.com/mikecao/flight/blob/master/LICENSE) license.

# Contributing

This website is hosted on [Github](https://github.com/mikecao/flightphp.com).
Updates and language translations are welcome.