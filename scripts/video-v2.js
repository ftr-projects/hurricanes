$(document).ready(function() {
  var myPlayer;
  var slider = $('.harvey-slider');

  slider.slick({
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    cssEase: 'linear',
    pauseOnHover: false
  });

  if ($('#videoPlayer')) {
    $.getScript( "//players.brightcove.net/4821467228001/BkZGPpHw_default/index.min.js", function( data, textStatus, jqxhr ) {
        videojs("videoPlayer").ready(function() {
          myPlayer = this;
          myPlayer.catalog.getVideo('5576173543001', function(error, video) {
            myPlayer.catalog.load(video);
            myPlayer.play();
          });
        });
      });
    }
});

$.getScript("//platform.twitter.com/widgets.js");
