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
    breakpoints: {
        0 : {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        }
    }
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


document.getElementById('az').addEventListener('click', () => translate('az'));
document.getElementById('en').addEventListener('click', () => translate('en'));
document.getElementById('ru').addEventListener('click', () => translate('ru'));

const translate = (language) => {
    let currentLanguage = languages[language];
    Object.keys(currentLanguage).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = currentLanguage[key];
        }
    });
} 