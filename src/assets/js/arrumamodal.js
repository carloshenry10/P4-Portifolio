// scripts.js
$(document).ready(function () {
  var player;

  // Função para carregar o vídeo
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtubePlayer', {
          events: {
              'onStateChange': onPlayerStateChange
          }
      });
  }

  // Função para pausar o vídeo quando o modal é fechado
  $('.modal').on('hidden.bs.modal', function () {
      player.pauseVideo();
  });

  // Função para reproduzir o vídeo quando o modal é aberto
  $('.modal').on('shown.bs.modal', function () {
      player.playVideo();
  });
});
