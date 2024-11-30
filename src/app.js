const videos = ["jfKfPfyJRdk", "5yx6BWlEVcY", "Na0w3Mz46GA", "vrB9wC6quaU", "lZGGMRYdil8", "mwPR8aizAyo"];
const images = ["../images/img1.gif", "../images/img2.gif", "../images/img3.gif", "../images/img4.gif", "../images/img5.gif", "../images/img6.gif", "../images/img7.gif"]
// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    function createButtons(videos) {
      let container = document.getElementById('video-buttons');
    
      videos.forEach((video, idx) => {
        let button = document.createElement('button');
        button.textContent = `Lofi #${idx + 1}`
        button.classList.add(`box${idx + 1}`)
        button.onclick = function() {
          setVideo(video);
          setImage();
        };
        container.appendChild(button);
      });
    }
    
    function setImage() {
      let randomImg = images[Math.floor(Math.random()*images.length)];
      document.body.style.backgroundImage= `url(${randomImg})`;
    }

    var player;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          height: '0',  // Ajusta el tamaño si quieres mostrar el video
          width: '0',
          videoId: videos[0],  // Inicializa con el primer video
          playerVars: {
              'playsinline': 1
          },
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
    }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
    
      function setVideo(videoId) {
        if (player) {
            player.loadVideoById(videoId);
        }
      }

      function stopVideo() {
        player.stopVideo();
      }

      function playVideo() {
        player.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }
    
createButtons(videos);
setImage();
