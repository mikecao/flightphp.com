# Views

Flight provides some basic templating functionality by default. To display a view
template call the `render` method with the name of the template file and optional
template data:

``` php?start_inline=1
Flight::render('hello.php', array('name' => 'Bob'));
```

The template data you pass in is automatically injected into the template and can
be reference like a local variable. Template files are simply PHP files. If the
content of the `hello.php` template file is:

``` php?start_inline=1
Hello, '<?php echo $name; ?>'!
```

The output would be:

    Hello, Bob!

You can also manually set view variables by using the set method:

``` php?start_inline=1
Flight::view()->set('name', 'Bob');
```

The variable `name` is now available across all your views. So you can simply do:

``` php?start_inline=1
Flight::render('hello');
```

Note that when specifying the name of the template in the render method, you can
leave out the `.php` extension.

By default Flight will look for a `views` directory for template files. You can
set an alternate path for your templates by setting the following config:

``` php?start_inline=1
Flight::set('flight.views.path', '/path/to/views');
```

## Layouts

It is common for websites to have a single layout template file with interchanging
content. To render content to be used in a layout, you can pass in an optional
parameter to the `render` method.

``` php?start_inline=1
Flight::render('header', array('heading' => 'Hello'), 'header_content');
Flight::render('body', array('body' => 'World'), 'body_content');
```

Your view will then have saved variables called `header_content` and `body_content`.
You can then render your layout by doing:

``` php?start_inline=1
Flight::render('layout', array('title' => 'Home Page'));
```

If the template files looks like this:

`header.php`:

``` php?start_inline=1
<h1><?php echo $heading; ?></h1>
```

`body.php`:

``` php?start_inline=1
<div><?php echo $body; ?></div>
```

`layout.php`:

``` php?start_inline=1
<html>
<head>
<title><?php echo $title; ?></title>
</head>
<body>
<?php echo $header_content; ?>
<?php echo $body_content; ?>
</body>
</html>
```

The output would be:

``` html
<html>
<head>
<title>Home Page</title>
</head>
<body>
<h1>Hello</h1>
<div>World</div>
</body>
</html>
```

## Custom Views

Flight allows you to swap out the default view engine simply by registering your
own view class. Here's how you would use the [Smarty](http://www.smarty.net/)
template engine for your views:

``` php?start_inline=1
// Load Smarty library
require './Smarty/libs/Smarty.class.php';

// Register Smarty as the view class
// Also pass a callback function to configure Smarty on load
Flight::register('view', 'Smarty', array(), function($smarty){
    $smarty->template_dir = './templates/';
    $smarty->compile_dir = './templates_c/';
    $smarty->config_dir = './config/';
    $smarty->cache_dir = './cache/';
});

// Assign template data
Flight::view()->assign('name', 'Bob');

// Display the template
Flight::view()->display('hello.tpl');
```

For completeness, you should also override Flight's default render method:

``` php?start_inline=1
Flight::map('render', function($template, $data){
    Flight::view()->assign($data);
    Flight::view()->display($template);
});
```