
# Перенаправления

Вы можете перенаправить запрос с помощью метода `redirect`. В качестве параметра передается новый URL:

``` php?start_inline=1
Flight::redirect('/new/location');
```

Flight по умолчанию возвращает в качестве ответа `HTTP 303 See Other`. Вы можете, по желанию, изменить код ответа:

``` php?start_inline=1
Flight::redirect('/new/location', 401);
```
