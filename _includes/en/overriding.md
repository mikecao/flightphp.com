# Overriding

Flight allows you to override its default functionality to suit your own needs,
without having to modify any code.

For example, when Flight cannot match a URL to a route, it invokes the `notFound`
method which sends a generic `HTTP 404` response. You can override this behavior
by using the `map` method:

``` php?start_inline=1
Flight::map('notFound', function(){
    // Display custom 404 page
    include 'errors/404.html';
});
```

Flight also allows you to replace core components of the framework.
For example you can replace the default Router class with your own custom class:

``` php?start_inline=1
// Register your custom class
Flight::register('router', 'MyRouter');

// When Flight loads the Router instance, it will load your class
$myrouter = Flight::router();
```

Framework methods like `map` and `register` however cannot be overridden. You will
get an error if you try to do so.