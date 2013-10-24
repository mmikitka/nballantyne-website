$('.accordion > dd').hide();

$('.accordion > dt > span > a').click(function() {
  var definition = $(this).parent().parent().next();
  var display = definition.css("display");
  if (display == "none") {
    definition.show();
    $(this).text("[-]");
  } else {
    definition.hide();
    $(this).text("[+]");
  }

  return false;
});
