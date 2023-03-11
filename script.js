var contents = document.querySelectorAll(".content");

function checkContents() {
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var position = content.getBoundingClientRect();

        // If the top of the element is in the viewport
        if (position.top < window.innerHeight) {
            content.classList.add("show");
        }
    }
}

// Check contents on page load
checkContents();

// Check contents on scroll
window.addEventListener("scroll", function() {
    checkContents();
});
