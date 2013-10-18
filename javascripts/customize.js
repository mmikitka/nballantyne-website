(function($, window, document) {
var allPanels = $('.accordion > dd');
allPanels.hide();

$('.accordion > dt > a').click(function() {
  var definition = $(this).parent().next();
  var display = definition.css("display");

  if (display == "none") {
    definition.show();
  } else {
    definition.hide();
  }

  return false;
});

}(Foundation.zj, window, document));
