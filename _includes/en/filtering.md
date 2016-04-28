# Filtering

Flight allows you to filter methods before and after they are called. There are no
predefined hooks you need to memorize. You can filter any of the default framework
methods as well as any custom methods that you've mapped.

A filter function looks like this:

``` php?start_inline=1
function(&$params, &$output) {
    // Filter code
}
```

Using the passed in variables you can manipulate the input parameters and/or the output.

You can have a filter run before a method by doing:

``` php?start_inline=1
Flight::before('start', function(&$params, &$output){
    // Do something
});
```

You can have a filter run after a method by doing:

``` php?start_inline=1
Flight::after('start', function(&$params, &$output){
    // Do something
});
```

You can add as many filters as you want to any method. They will be called in the
order that they are declared.

Here's an example of the filtering process:

``` php?start_inline=1
// Map a custom method
Flight::map('hello', function($name){
    return "Hello, $name!";
});

// Add a before filter
Flight::before('hello', function(&$params, &$output){
    // Manipulate the parameter
    $params[0] = 'Fred';
});

// Add an after filter
Flight::after('hello', function(&$params, &$output){
    // Manipulate the output
    $output .= " Have a nice day!";
});

// Invoke the custom method
echo Flight::hello('Bob');
```

This should display:

    Hello Fred! Have a nice day!

If you have defined multiple filters, you can break the chain by returning `false`
in any of your filter functions:

``` php?start_inline=1
Flight::before('start', function(&$params, &$output){
    echo 'one';
});

Flight::before('start', function(&$params, &$output){
    echo 'two';

    // This will end the chain
    return false;
});

// This will not get called
Flight::before('start', function(&$params, &$output){
    echo 'three';
});
```

Note, core methods such as `map` and `register` cannot be filtered because they
are called directly and not invoked dynamically.