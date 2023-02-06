function removeOverlay(){
    document.body.style.overflowY = 'scroll';
    document.getElementById('overlay').style.display='none';
    var video = document.getElementById('video');
    video.pause();
}


function startOverlay(){
    document.body.style.overflowY = 'hidden';
    document.getElementById('overlay').style.display='block';
    var video = document.getElementById('video');
    video.play();
}
