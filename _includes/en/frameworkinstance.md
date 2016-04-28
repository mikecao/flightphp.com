# Framework Instance

Instead of running Flight as a global static class, you can optionally run it
as an object instance.

``` php?start_inline=1
require 'flight/autoload.php';

use flight\Engine;

$app = new Engine();

$app->route('/', function(){
    echo 'hello world!';
});

$app->start();
```

So instead of calling the static method, you would call the instance method with
the same name on the Engine object.