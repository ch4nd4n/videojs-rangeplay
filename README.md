videojs-rangeplay
=================
Videojs plugin that allows you to play video within given range.

[View Demo](http://ch4nd4n.github.io/videojs-rangeplay/)


### Using it

In HTML include relevant javascript files like videojs and range-play plugin.

    <script src="http://vjs.zencdn.net/4.2/video.js"></script>
    <script src="rangeplay.videojs.js"></script>

And in body you would have something like.

    <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="320" height="180" poster="http://video-js.zencoder.com/oceans-clip.png" data-setup='{}'>
          <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
    </video>



In JavaScript

    <script>
      var range = {startTime : 10, endTime: 30};
      var player = _V_('example_video_1', {});
      player.rangePlay(range);
    </script>
