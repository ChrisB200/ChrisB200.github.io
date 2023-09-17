let prevScrollPos = window.scrollY;
const header = document.getElementById("header-navbar");

document.addEventListener('mousemove', function(e) {
    var auraThingy = document.getElementById('auraThingy');
    auraThingy.style.left = (e.pageX - 300) + 'px';
    auraThingy.style.top = (e.pageY - 300) + 'px';
});

function redirectToPage(url) {
    window.open(url, '_blank');
}

// Function to toggle the "active" class based on scroll position
function toggleHeader() {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 0) {
        header.classList.add("active");
    } else if (prevScrollPos > currentScrollPos) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
    prevScrollPos = currentScrollPos;
}

// Initial call to toggleHeader to show the header at the top of the page
toggleHeader();

window.onscroll = toggleHeader;
const words = ["Websites", "Games", "Mobile Apps", "Web Apps", "UX/UI"]; // Add your words here

const textElement = document.getElementById("glitchy-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

setTimeout(type, 2000);