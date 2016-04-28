# Routing

Routing in Flight is done by matching a URL pattern with a callback function.

``` php?start_inline=1
Flight::route('/', function(){
    echo 'hello world!';
});
```

The callback can be any object that is callable. So you can use a regular function:

``` php?start_inline=1
function hello(){
    echo 'hello world!';
}

Flight::route('/', 'hello');
```

Or a class method:

``` php?start_inline=1
class Greeting {
    public static function hello() {
        echo 'hello world!';
    }
}

Flight::route('/', array('Greeting','hello'));
```

Routes are matched in the order they are defined. The first route to match a request will be invoked.

## Method Routing

By default, route patterns are matched against all request methods. You can respond to specific methods by placing an identifier before the URL.

``` php?start_inline=1
Flight::route('GET /', function(){
    echo 'I received a GET request.';
});

Flight::route('POST /', function(){
    echo 'I received a POST request.';
});
```

You can also map multiple methods to a single callback by using a `|` delimiter:

``` php?start_inline=1
Flight::route('GET|POST /', function(){
    echo 'I received either a GET or a POST request.';
});
```

## Regular Expressions

You can use regular expressions in your routes:

``` php?start_inline=1
Flight::route('/user/[0-9]+', function(){
    // This will match /user/1234
});
```

## Named Parameters

You can specify named parameters in your routes which will be passed along to your callback function.

``` php?start_inline=1
Flight::route('/@name/@id', function($name, $id){
    echo "hello, $name ($id)!";
});
```

You can also include regular expressions with your named parameters by using the `:` delimiter:

``` php?start_inline=1
Flight::route('/@name/@id:[0-9]{3}', function($name, $id){
    // This will match /bob/123
    // But will not match /bob/12345
});
```

## Optional Parameters

You can specify named parameters that are optional for matching by wrapping segments in parentheses.

``` php?start_inline=1
Flight::route('/blog(/@year(/@month(/@day)))', function($year, $month, $day){
    // This will match the following URLS:
    // /blog/2012/12/10
    // /blog/2012/12
    // /blog/2012
    // /blog
});
```

Any optional parameters that are not matched will be passed in as NULL.

## Wildcards

Matching is only done on individual URL segments. If you want to match multiple segments you can use the `*` wildcard.

``` php?start_inline=1
Flight::route('/blog/*', function(){
    // This will match /blog/2000/02/01
});
```

To route all requests to a single callback, you can do:

``` php?start_inline=1
Flight::route('*', function(){
    // Do something
});
```

## Passing

You can pass execution on to the next matching route by returning `true` from your callback function.

``` php?start_inline=1
Flight::route('/user/@name', function($name){
    // Check some condition
    if ($name != "Bob") {
        // Continue to next route
        return true;
    }
});

Flight::route('/user/*', function(){
    // This will get called
});
```

## Route Info

If you want to inspect the matching route information, you can request for the route
object to be passed to your callback by passing in `true` as the third parameter in
the route method. The route object will always be the last parameter passed to your
callback function.

``` php?start_inline=1
Flight::route('/', function($route){
    // Array of HTTP methods matched against
    $route->methods;

    // Array of named parameters
    $route->params;

    // Matching regular expression
    $route->regex;

    // Contains the contents of any '*' used in the URL pattern
    $route->splat;
}, true);
```
