# Extending

Flight is designed to be an extensible framework. The framework comes with a set
of default methods and components, but it allows you to map your own methods,
register your own classes, or even override existing classes and methods.

## Mapping Methods

To map your own custom method, you use the `map` function:

``` php?start_inline=1
// Map your method
Flight::map('hello', function($name){
    echo "hello $name!";
});

// Call your custom method
Flight::hello('Bob');
```

## Registering Classes

To register your own class, you use the `register` function:

``` php?start_inline=1
// Register your class
Flight::register('user', 'User');

// Get an instance of your class
$user = Flight::user();
```

The register method also allows you to pass along parameters to your class
constructor. So when you load your custom class, it will come pre-initialized.
You can define the constructor parameters by passing in an additional array.
Here's an example of loading a database connection:

``` php?start_inline=1
// Register class with constructor parameters
Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=test','user','pass'));

// Get an instance of your class
// This will create an object with the defined parameters
//
//     new PDO('mysql:host=localhost;dbname=test','user','pass');
//
$db = Flight::db();
```

If you pass in an additional callback parameter, it will be executed immediately
after class construction. This allows you to perform any set up procedures for your
new object. The callback function takes one parameter, an instance of the new object.

``` php?start_inline=1
// The callback will be passed the object that was constructed
Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=test','user','pass'),
  function($db){
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
);
```

By default, every time you load your class you will get a shared instance.
To get a new instance of a class, simply pass in `false` as a parameter:

``` php?start_inline=1
// Shared instance of the class
$shared = Flight::db();

// New instance of the class
$new = Flight::db(false);
```

Keep in mind that mapped methods have precedence over registered classes. If you
declare both using the same name, only the mapped method will be invoked.
