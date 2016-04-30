# Что такое Flight?

Flight это быстрый, простой, расширяемый фреймворк для PHP.
Flight позовляет вам быстро строить веб-приложения с использованиемы REST.

``` php?start_inline=1
require 'flight/Flight.php';

Flight::route('/', function(){
  echo 'hello world!';
});

Flight::start();
```

[Узнать больше]({{page.lang|prepend:'/'|replace:'/.',''}}/learn)

# Требования

Flight требует PHP 5.3 или выше.

# Лицензия

Flight выпущен под лицензией [MIT](https://github.com/mikecao/flight/blob/master/LICENSE).

# Внести свой вклад

Исходный код этого веб-сайта доступен на [Github](https://github.com/mikecao/flightphp.com).
Обновления и переводы приветствуются.
