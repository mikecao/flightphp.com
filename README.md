# flightphp.com

This is the repository of the website [flightphp.com](flightphp.com).
It is hosted directly from the repository as a [GitHub Pages](https://pages.github.com/) website.
The website built with the program [Jekyll](https://jekyllrb.com/).

## Contributing

If you would like to make updates or add language translations, just fork
the `master` branch and submit a pull request. Do not fork the `gh-pages` branch
since that will only contain the compiled html from Jekyll.

## Translations

If you would like to translate the website into another language, follow these steps:

1. Create a new directory at the root level with the proper [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) code as the name. For example: `fr` for French.

2. Copy the `index.html`, `install.html`, and `learn.html` files from the root into your language new directory.

3. Change the `lang` setting at the top of each file to your language code. For example:

``` yaml
layout: default
lang: fr
```

4. In the `_includes` folder, create a folder with your language code as the name. There should already be an existing `en` folder for English.

5. Copy all the `.md` files from the `en` directory into your new directory.

6. Translate all the `.md` files directly.