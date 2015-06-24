(function ($) {
  Drupal.behaviors.CkeditorTimestamp = {
    attach: function (context, settings) {
      CKEDITOR.timestamp = Drupal.settings.ckeditor_timestamp.timestamp;
    }
  };
}) (jQuery);