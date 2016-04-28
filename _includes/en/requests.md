# Requests

Flight encapsulates the HTTP request into a single object, which can be
accessed by doing:

``` php?start_inline=1
$request = Flight::request();
```

The request object provides the following properties:

```
url - The URL being requested
base - The parent subdirectory of the URL
method - The request method (GET, POST, PUT, DELETE)
referrer - The referrer URL
ip - IP address of the client
ajax - Whether the request is an AJAX request
scheme - The server protocol (http, https)
user_agent - Browser information
type - The content type
length - The content length
query - Query string parameters
data - Post data or JSON data
cookies - Cookie data
files - Uploaded files
secure - Whether the connection is secure
accept - HTTP accept parameters
proxy_ip - Proxy IP address of the client
```

You can access the `query`, `data`, `cookies`, and `files` properties
as arrays or objects.

So, to get a query string parameter, you can do:

``` php?start_inline=1
$id = Flight::request()->query['id'];
```

Or you can do:

``` php?start_inline=1
$id = Flight::request()->query->id;
```

## RAW Request Body

To get the raw HTTP request body, for example when dealing with PUT requests, you can do:

``` php?start_inline=1
$body = Flight::request()->getBody();
```

## JSON Input

If you send a request with the type `application/json` and the data `{"id": 123}` it will be available
from the `data` property:

``` php?start_inline=1
$id = Flight::request()->data->id;
```