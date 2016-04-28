# Framework Methods

Flight is designed to be easy to use and understand. The following is the complete
set of methods for the framework. It consists of core methods, which are regular
static methods, and extensible methods, which are mapped methods that can be filtered
or overridden.

## Core Methods

``` php?start_inline=1
Flight::map($name, $callback) // Creates a custom framework method.
Flight::register($name, $class, [$params], [$callback]) // Registers a class to a framework method.
Flight::before($name, $callback) // Adds a filter before a framework method.
Flight::after($name, $callback) // Adds a filter after a framework method.
Flight::path($path) // Adds a path for autoloading classes.
Flight::get($key) // Gets a variable.
Flight::set($key, $value) // Sets a variable.
Flight::has($key) // Checks if a variable is set.
Flight::clear([$key]) // Clears a variable.
Flight::init() // Initializes the framework to its default settings.
Flight::app() // Gets the application object instance
```

## Extensible Methods

``` php?start_inline=1
Flight::start() // Starts the framework.
Flight::stop() // Stops the framework and sends a response.
Flight::halt([$code], [$message]) // Stop the framework with an optional status code and message.
Flight::route($pattern, $callback) // Maps a URL pattern to a callback.
Flight::redirect($url, [$code]) // Redirects to another URL.
Flight::render($file, [$data], [$key]) // Renders a template file.
Flight::error($exception) // Sends an HTTP 500 response.
Flight::notFound() // Sends an HTTP 404 response.
Flight::etag($id, [$type]) // Performs ETag HTTP caching.
Flight::lastModified($time) // Performs last modified HTTP caching.
Flight::json($data, [$code], [$encode]) // Sends a JSON response.
Flight::jsonp($data, [$param], [$code], [$encode]) // Sends a JSONP response.
```

Any custom methods added with `map` and `register` can also be filtered.