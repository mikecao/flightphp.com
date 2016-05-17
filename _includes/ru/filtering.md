# Фильтры

Flight позволяет фильтровать методы до и после их выполнения.
Вы можете фильтровать абсолютно любые методы: как базовые, так и добавленные (кроме методов `map` и `register`).

Шаблон функции фильтра:

``` php?start_inline=1
function(&$params, &$output) {
    // Filter code
}
```

Используя передаваемые в фильтр аргументы, вы можете менять как параметры ввода,
так и результат работы отслеживаемого метода.

Для вызова фильтра перед исполением метода используется метод `before`:

``` php?start_inline=1
Flight::before('start', function(&$params, &$output){
    // Код выполнится до старта приложения
});
```

А для фильтрации метода после его исполнения, используется метод `after`:

``` php?start_inline=1
Flight::after('start', function(&$params, &$output){
    // Код выполнится после работы приложения
});
```

На метод можно добавлять несколько фильтров. Они будут применены в порядке определения.

Пример работы фильтров:

``` php?start_inline=1
// Определение метода hello
Flight::map('hello', function($name){
    return "Hello, $name!";
});

// Фильтр до выполнения hello
Flight::before('hello', function(&$params, &$output){
    // Изменяется передаваемый параметр
    $params[0] = 'Fred';
});

// Фильтр после выполнения hello
Flight::after('hello', function(&$params, &$output){
    // Изменяется результат выполнения метода
    $output .= " Have a nice day!";
});

// Вызывается метод
echo Flight::hello('Bob');
```

Результат:

    Hello Fred! Have a nice day!

Если определено несколько фильтров, цепочку их вызова можно прервать вернув `false`:

``` php?start_inline=1
Flight::before('start', function(&$params, &$output){
    echo 'раз';
});

Flight::before('start', function(&$params, &$output){
    echo 'два';

    // Это прервет цепочку вызова фильтров
    return false;
});

// Этот фильтр не будет вызван
Flight::before('start', function(&$params, &$output){
    echo 'три';
});
```

Помните, базовые методы `map` и `register` нельзя фильтровать, так как они вызываются напрямую, а не динамически.
