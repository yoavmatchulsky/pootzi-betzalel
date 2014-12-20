$(function() {
  var video = $('.video-container video')[0],
      $video_play = $('.video-container .video-controls .video-play'),
      $video_pause = $('.video-container .video-controls .video-pause');
  console.log(video);
  $('.video-container .video-controls span').on('click', function() {
    var paused = video.paused;
    
    $video_pause.toggleClass('shown', paused);
    $video_play.toggleClass('shown', !paused);
    
    if (paused) {
      video.play();
    }
    else {
      video.pause();
    }
  });
});