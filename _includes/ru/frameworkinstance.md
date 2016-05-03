# Экземпляр фреймворка

Вместо работы с Flight через статические методы, можно создать экземпляр фреймворка и работать с ним.

``` php?start_inline=1
require 'flight/autoload.php';

use flight\Engine;

$app = new Engine();

$app->route('/', function(){
    echo 'hello world!';
});

$app->start();
```

Вместо вызова статических методов, необходимо будет вызывать те же методы на экземпляре объекта `Engine`.