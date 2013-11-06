(function ($, window, document, undefined) {
  'use strict';

  // Accordion
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

  // Banner image rotation

  /**
   * Returns a random integer between min and max
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var bannerImages = [
    "baby_cacti.jpg",
    "bird_statue.jpg",
    "books.jpg",
    "cactus_closeup.jpg",
    "canoe_paddle.jpg",
    "cd07_blue.jpg",
    "closeup_grass.jpg",
    "duquesne_ghosthouse2.jpg",
    "duquesne_ghosthouse_wall.jpg",
    "duquesne_oldadobe.jpg",
    "fh_reflection.jpg",
    "flowerpot.jpg",
    "getting_ceiling.jpg",
    "harshaw_ghosthouse2.jpg",
    "hawk_takeoff.jpg",
    "icicles.jpg",
    "lochiel_slag2.jpg",
    "lochiel_slag.jpg",
    "lone_bird.jpg",
    "loon.jpg",
    "mtlemmon_ice.jpg",
    "mtnscows_srv.jpg",
    "newspaper.jpg",
    "pads.jpg",
    "patagonia_above.jpg",
    "pike_jump2.jpg",
    "pike_jump3.jpg",
    "pronghorns_srv.jpg",
    "rainwindow.jpg",
    "sanr_wind.jpg",
    "shoreline.jpg",
    "smokestack.jpg",
    "snake_path.jpg",
    "snow.jpg",
    "snowy_cactus.jpg",
    "sundial_slh.jpg",
    "tracks_srv.jpg",
    "treetops_tbc.jpg",
    "vantana_out4.jpg",
    "wake.jpg",
    "water_surface.jpg",
    "wheat2.jpg",
    "window_vc.jpg"
  ];

  var arrayIndex = getRandomInt(0, bannerImages.length - 1);
  var imagePath = "images/banner_340_280/" + bannerImages[arrayIndex];
  $('.banner-square').css("background-image", "url(" + imagePath + ")");

  var bannerAnchors = $('.banner-square-image-url');
  bannerAnchors.attr("href", imagePath);
}(jQuery, this, this.document));
