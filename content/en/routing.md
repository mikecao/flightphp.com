# <a name="routing"></a> Routing

Routing in Flight is done by matching a URL pattern with a callback function.

``` php
Flight::route('/', function(){
    echo 'hello world!';
});
```

The callback can be any object that is callable. So you can use a regular function:

``` php
function hello(){
    echo 'hello world!';
}

Flight::route('/', 'hello');
```

Or a class method:

``` php
class Greeting {
    public static function hello() {
        echo 'hello world!';
    }
}

Flight::route('/', array('Greeting','hello'));
```

Or an object method:

``` php
class Greeting
{
    public function __construct() {
        $this->name = 'John Doe';
    }

    public function hello() {
        echo "Hello, {$this->name}!";
    }
}

$greeting = new Greeting();

Flight::route('/', array($greeting, 'hello'));
```

Routes are matched in the order they are defined. The first route to match a request will be invoked.

## Method Routing

By default, route patterns are matched against all request methods. You can respond to specific methods by placing an identifier before the URL.

``` php
Flight::route('GET /', function(){
    echo 'I received a GET request.';
});

Flight::route('POST /', function(){
    echo 'I received a POST request.';
});
```

You can also map multiple methods to a single callback by using a `|` delimiter:

``` php
Flight::route('GET|POST /', function(){
    echo 'I received either a GET or a POST request.';
});
```

## Regular Expressions

You can use regular expressions in your routes:

``` php
Flight::route('/user/[0-9]+', function(){
    // This will match /user/1234
});
```

## Named Parameters

You can specify named parameters in your routes which will be passed along to your callback function.

``` php
Flight::route('/@name/@id', function($name, $id){
    echo "hello, $name ($id)!";
});
```

You can also include regular expressions with your named parameters by using the `:` delimiter:

``` php
Flight::route('/@name/@id:[0-9]{3}', function($name, $id){
    // This will match /bob/123
    // But will not match /bob/12345
});
```

## Optional Parameters

You can specify named parameters that are optional for matching by wrapping segments in parentheses.

``` php
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

``` php
Flight::route('/blog/*', function(){
    // This will match /blog/2000/02/01
});
```

To route all requests to a single callback, you can do:

``` php
Flight::route('*', function(){
    // Do something
});
```

## Passing

You can pass execution on to the next matching route by returning `true` from your callback function.

``` php
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

``` php
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
## Route Grouping

There may be times when you want to group related routes together (such as `/api/v1`).
You can do this by using the `group` method:

```php
Flight::group('/api/v1', function () {
  Flight::route('/users', function () {
	// Matches /api/v1/users
  });

  Flight::route('/posts', function () {
	// Matches /api/v1/posts
  });
});
```

You can even nest groups of groups:

```php
Flight::group('/api', function () {
  Flight::group('/v1', function () {
	// Flight::get() gets variables, it doesn't set a route! See object context below
	Flight::route('GET /users', function () {
	  // Matches GET /api/v1/users
	});

	Flight::post('/posts', function () {
	  // Matches POST /api/v1/posts
	});

	Flight::put('/posts/1', function () {
	  // Matches PUT /api/v1/posts
	});
  });
  Flight::group('/v2', function () {

	// Flight::get() gets variables, it doesn't set a route! See object context below
	Flight::route('GET /users', function () {
	  // Matches GET /api/v2/users
	});
  });
});
```

### Grouping with Object Context

You can still use route grouping with the `Engine` object in the following way:

```php
$app = new \flight\Engine();
$app->group('/api/v1', function (Router $router) {
  $router->get('/users', function () {
	// Matches GET /api/v1/users
  });

  $router->post('/posts', function () {
	// Matches POST /api/v1/posts
  });
});
```

## Route Aliasing

You can assign an alias to a route, so that the URL can dynamically be generated later in your code (like a template for instance).

```php
Flight::route('/users/@id', function($id) { echo 'user:'.$id; }, false, 'user_view');

// later in code somewhere
Flight::getUrl('user_view', [ 'id' => 5 ]); // will return '/users/5'
```

This is especially helpful if your URL happens to change. In the above example, lets say that users was moved to `/admin/users/@id` instead.
With aliasing in place, you don't have to change anywhere you reference the alias because the alias will now return `/admin/users/5` like in the 
example above.

Route aliasing still works in groups as well:

```php
Flight::group('/users', function() {
    Flight::route('/@id', function($id) { echo 'user:'.$id; }, false, 'user_view');
});


// later in code somewhere
Flight::getUrl('user_view', [ 'id' => 5 ]); // will return '/users/5'
```
