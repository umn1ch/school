// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// SWIPER - можно не трогать, можно оставить толкьо инициализацию, как по кайфу

var swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// BOOK SWIPER
var swiper = new Swiper(".books-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.books-swiper-button-next',
        prevEl: '.books-swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });

// LANGUAGE CHANGE
async function loadTranslations() {
    try {
        const response = await fetch('languages.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
        return null;
    }
}

function switchLanguage(language, translations) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const id = element.id;
        if (translations[language][id]) {
            element.textContent = translations[language][id];
        }
    });
}

document.getElementById('az').addEventListener('click', () => switchLanguage('az', translations));
document.getElementById('en').addEventListener('click', () => switchLanguage('en', translations));
document.getElementById('ru').addEventListener('click', () => switchLanguage('ru', translations));

let translations;

loadTranslations().then(data => {
    translations = data;
    switchLanguage('en', translations); 
});