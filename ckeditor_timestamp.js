(function ($) {
  Drupal.behaviors.CkeditorTimestamp = {
    attach: function (context, settings) {
      CKEDITOR.timestamp = +new Date;
    }
  };
}) (jQuery);