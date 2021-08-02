// var video = document.getElementById('videoSeri1');
var placeholder = document.getElementById('placeholder_1');

video.onwaiting = function () {
    showPlaceholder(placeholder_1, this);
    console.log('onWaiting');
};
video.onplaying = function () {
    hidePlaceholder(placeholder_1, this);
    console.log('onPlaying');
};

function showPlaceholder(img) {
    img.style.display = 'block';
}

function hidePlaceholder(img) {
    img.style.display = 'none';
}
