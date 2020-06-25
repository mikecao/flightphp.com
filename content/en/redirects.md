# <a name="redirects"></a> Redirects

You can redirect the current request by using the `redirect` method and passing
in a new URL:

``` php
Flight::redirect('/new/location');
```

By default Flight sends a HTTP 303 status code. You can optionally set a
custom code:

``` php
Flight::redirect('/new/location', 401);
```