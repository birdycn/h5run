function play_music() {
  if ($('#mc_play').hasClass('stop')) {
    $('#mc_play audio').get(0).play();
    $('#mc_play').attr('class', 'on');

  } else {
    $('#mc_play audio').get(0).pause();
    $('#mc_play').attr('class', 'stop');
  }
}
function audioAutoPlay(id) {

  var audio = document.getElementById(id);
  audio.play();
  document.addEventListener("WeixinJSBridgeReady", function () {
    audio.play();
  }, false);
  document.addEventListener('YixinJSBridgeReady', function () {
    audio.play();
  }, false);
}
$(document).ready(function () {
  audioAutoPlay('musicfx');
});
