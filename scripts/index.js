let prevScrollPos = window.scrollY;
const header = document.getElementById("header-navbar");

document.addEventListener('mousemove', function(e) {
    var auraThingy = document.getElementById('auraThingy');
    auraThingy.style.left = (e.clientX - 300) + 'px';
    auraThingy.style.top = (e.clientY - 300) + 'px';
});

function onClickNavLink(element) {
    var my_element = document.getElementById(element);

    my_element.scrollIntoView({behavior: "smooth", block: "start"});
    // Prevent the default behavior of the anchor link
    event.preventDefault();   
}


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

const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");

menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
});

// Function to toggle the menu
function toggleMenu() {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
}

// Event listener to close the menu when clicking outside
document.addEventListener("click", function (event) {
    const isClickInsideMenu = menuItems.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);
  
    if (window.innerWidth < 910) {
        menuItems.style.display = "none"; // Close the menu
    }
});

// Event listener to handle window resize
window.addEventListener("resize", function () {
    if (window.innerWidth >= 910) {
        menuItems.style.display = "flex"; // Show the menu when window width is greater than or equal to 910 pixels
    }
    else {
        menuItems.style.display = "none"; // Close the menu
    }
});
