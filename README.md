# Drupal CKEditor CSS and JS Timestamp Query Module

Small Drupal module to solve CKEditor's cache issue by refreshing the timestamp that is added as query to every custom CKE CSS and JS on page reload.

All this module does is to load a small JS before any other CKEditor JS is loaded to append a new timestamp query every time you clear Drupal cache, so  only the freshest custom CKE JS and CSS get loaded.

Download, enable, clear the cache and see how the timestamp is queried to your CKEditor files to finally load your updated files during development.

Thanks @affective
- http://ckeditor.com/forums/CKEditor/Problem-with-config.js-not-updating
Thanks [@tedforgive](https://github.com/tedfordgif)
- for implementing [hook_flush_caches()](https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_flush_caches/7)


Maybe solves the following issues
- https://www.drupal.org/node/2330515
- http://drupal.stackexchange.com/questions/42016/ckeditor-styles-js-caching-issue
- https://www.drupal.org/node/867056
- http://stackoverflow.com/questions/14940452/force-ckeditor-to-refresh-config
