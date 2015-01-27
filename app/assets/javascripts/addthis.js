addthis = function() {

      // Remove all global properties set by addthis, otherwise it won't reinitialize
      for (var i in window) {
        if (/^addthis/.test(i) || /^_at/.test(i)) {
          delete window[i];
        }
      }
      window.addthis_share = null;

      // Finally, load addthis
      $.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5467754c50034f1e");
}

$(document).ready(addthis);
$(document).on('page:load', addthis);
$(document).on('page:change', addthis);