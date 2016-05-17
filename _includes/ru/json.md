# JSON

Flight имеет встроенную поддержку форматов JSON и JSONP. Чтобы послать данные в желаемом формате необходимо использовать методы `json` или `jsonp` и передать в них данные:

``` php?start_inline=1
Flight::json(array('id' => 123));
```

Для JSONP, можно также вторым параметром указать переменную которую Flight будет использовать как имя callback-функции:

``` php?start_inline=1
Flight::jsonp(array('id' => 123), 'q');
```

Передавая в URL `?q=my_func`, результатом станет:

```
my_func({"id":123});
```

Если не указать параметр, Flight по умолчанию назовет функцию `jsonp`.