
// ===== Service worker / Manifest
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
}

// Disable right mouse click
var video = document.querySelector('video')
video.oncontextmenu = function() {
    return false;
}

// ===== Modal
function modalFunc(id) {
    var modalId = document.getElementById(id);
    modalId.classList.toggle('modal-display');
}
