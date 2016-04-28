# Variables

Flight allows you to save variables so that they can be used anywhere in your application.

``` php?start_inline=1
// Save your variable
Flight::set('id', 123);

// Elsewhere in your application
$id = Flight::get('id');
```
To see if a variable has been set you can do:

``` php?start_inline=1
if (Flight::has('id')) {
     // Do something
}
```

You can clear a variable by doing:

``` php?start_inline=1
// Clears the id variable
Flight::clear('id');

// Clears all variables
Flight::clear();
```

Flight also uses variables for configuration purposes.

``` php?start_inline=1
Flight::set('flight.log_errors', true);
```