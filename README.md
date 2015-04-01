# Drupal CKEditor CSS and JS Timestamp Query Module

Small Drupal module to solve CKEditor's cache issue by refreshing its timestamp that is added as query to every custom CKE CSS and JS on page reload.

All it does is loading a small JS before any other CKEditor JS is loaded where I set <code>CKEDITOR.timestamp = +new Date</code>. That timestamp then is appended to the CKE files you are developing and will be refreshed everytime you reload the browser which then loads only the freshest custom CKE JS and CSS.

Download, enable, refresh your page and see how the timestamp is queried to your CKEditor files to finally load your updated files during development.

Thanks @affective
http://ckeditor.com/forums/CKEditor/Problem-with-config.js-not-updating

Maybe solves the following issues
- https://www.drupal.org/node/2330515
- http://drupal.stackexchange.com/questions/42016/ckeditor-styles-js-caching-issue
- https://www.drupal.org/node/867056
- http://stackoverflow.com/questions/14940452/force-ckeditor-to-refresh-config
