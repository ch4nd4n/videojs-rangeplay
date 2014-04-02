(function(vjs) {

  var
    /**
     * Copies properties from one or more objects onto an original.
     */
    extend = function(obj /*, arg1, arg2, ... */) {
      var arg, i, k;
      for (i = 1; i < arguments.length; i++) {
        arg = arguments[i];
        for (k in arg) {
          if (arg.hasOwnProperty(k)) {
            obj[k] = arg[k];
          }
        }
      }
      return obj;
    },

    // define some reasonable defaults for this sweet plugin
    defaults = {
      autoDisable: false
    },

    // plugin initializer
    rangePlay = function(options) {
      var
        // save a reference to the player instance
        player = this,
        startTime = 5,
        endTime = 10,

        // merge options and defaults
        settings = extend({}, defaults, options || {});

      player.rangePlay = {
        restrict: function() {
            if(player.currentTime() > settings.endTime || player.currentTime() < settings.startTime) {
               player.currentTime(settings.startTime);
            }
        },
        init: function(){
          player.on('seeked', player.rangePlay.restrict);
          player.on('playing', function(){
            player.on('timeupdate', player.rangePlay.restrict);
          });
        }
      };
      player.rangePlay.init();
    };

  // register the plugin with video.js
  vjs.plugin('rangePlay', rangePlay);

}(window.videojs));
