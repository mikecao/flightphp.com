# Установка

### 1. Скачайте файлы.

Если вы пользуетесь [Composer](https://getcomposer.org/), вы можете выполнить следующую команду:

```
composer require mikecao/flight
```

ИЛИ вы можете [скачать](https://github.com/mikecao/flight/archive/master.zip) файлы и разместить их на своем сервере вручную.

### 2. Настройка веб-сервера.

Для _Apache_, добавьте в `.htaccess` файл следующие строки:

``` apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

Для _Nginx_, добавьте эти строки в настройки сервера:

``` nginx
server {
    location / {
        try_files $uri $uri/ /index.php;
    }
}
```

### 3. Создайте свой `index.php` файл.

Для начала подключите фреймворк.

``` php?start_inline=1
require 'flight/Flight.php';
```

Если вы используете Composer, подключите автозагрузчик.

``` php?start_inline=1
require 'vendor/autoload.php';
```

Определите путь и опишите функцию обработки запроса.

``` php?start_inline=1
Flight::route('/', function(){
    echo 'hello world!';
});
```

Наконец, запустите фреймворк.

```php
Flight::start();
```
