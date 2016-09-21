
(function youTubeFix() {
  
  var player;
  var poller = setInterval(poll, 1000);
  
  function poll() {
    player = document.getElementById('movie_player');
    if (player !== null) {
      clearInterval(poller);
    }
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.keyCode !== 32) { // spacebar
      return;
    }
    if (player === null) {
      return;
    }
    
    // console.log('ae', document.activeElement)
    // gives focus but not always event target
    // eg <body> when load cursor in [search] box
    var target = event.target;
    
    // allow typing in page search field
    if (target.id === 'masthead-search-term') {
      target.focus();
      return;
    }
    // allow typing in video comments field
    if (target.className === 'comment-simplebox-text') {
      return;
    }
    // otherwise focus on video player if not already the focus
    if (target !== player && target.className !== 'ytp-progress-bar') {
      player.dispatchEvent(new MouseEvent('click'));
    }
    event.preventDefault(); // spacebar
    event.target.blur();
    player.focus(); // redundant
  });
}());

  
