// Mencegah zoom in atau zoom out
function disableZoom() {
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
        }
    });
}