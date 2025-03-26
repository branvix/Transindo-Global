// Set default language
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Apply language on page load
    applyLanguage(currentLanguage);
    updateLangToggleButton();
    
    // Initialize slideshow
    showSlides(slideIndex);
    
    // Auto advance slides
    setInterval(function() {
        plusSlides(1);
    }, 5000);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Video play function
function playVideo() {
    const video = document.getElementById('promo-video');
    const thumbnail = document.querySelector('.video-thumbnail');
    const playButton = document.querySelector('.video-play-button');
    
    thumbnail.style.display = 'none';
    playButton.style.display = 'none';
    video.style.zIndex = 3;
    video.play();
}

// Language toggle implementation
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLangToggleButton();
    
    // Return to prevent default action
    return false;
}

// Apply selected language to the page
function applyLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update navigation
    document.querySelectorAll('.nav-button').forEach((button, index) => {
        if (index === 0) button.textContent = translations[lang]["faq"];
        if (index === 1) button.textContent = translations[lang]["our_group"];
        if (index === 2) button.textContent = translations[lang]["price_list"];
    });
    
    // Update hero section
    document.querySelector('.hero-title').textContent = translations[lang]["hero_title"];
    document.querySelector('.hero-subtitle').textContent = translations[lang]["hero_subtitle"];
    document.querySelector('.contact-button').textContent = translations[lang]["contact_us"];
    
    // Update menu section
    document.querySelector('.menu-title').textContent = translations[lang]["our_commitment"];
    const menuItems = document.querySelectorAll('.menu-item');
    if (menuItems.length >= 4) {
        menuItems[0].querySelector('h3').textContent = translations[lang]["menu_title_1"];
        menuItems[0].querySelector('p').textContent = translations[lang]["menu_desc_1"];
        menuItems[1].querySelector('h3').textContent = translations[lang]["menu_title_2"];
        menuItems[1].querySelector('p').textContent = translations[lang]["menu_desc_2"];
        menuItems[2].querySelector('h3').textContent = translations[lang]["menu_title_3"];
        menuItems[2].querySelector('p').textContent = translations[lang]["menu_desc_3"];
        menuItems[3].querySelector('h3').textContent = translations[lang]["menu_title_4"];
        menuItems[3].querySelector('p').textContent = translations[lang]["menu_desc_4"];
    }
    
    // Update video section
    document.querySelector('.video-subtitle').textContent = translations[lang]["video_subtitle"];
    
    // Update social section
    const socialItems = document.querySelectorAll('.social-item');
    if (socialItems.length >= 4) {
        socialItems[0].querySelector('p').textContent = translations[lang]["follow_updates"];
        socialItems[0].querySelector('a').textContent = translations[lang]["follow_us"];
        socialItems[1].querySelector('p').textContent = translations[lang]["connect_network"];
        socialItems[1].querySelector('a').textContent = translations[lang]["connect"];
        socialItems[2].querySelector('p').textContent = translations[lang]["join_community"];
        socialItems[2].querySelector('a').textContent = translations[lang]["like_page"];
        socialItems[3].querySelector('p').textContent = translations[lang]["stay_updated"];
        socialItems[3].querySelector('a').textContent = translations[lang]["view_all"];
    }
    
    // Update slideshow captions
    const slideCaptions = document.querySelectorAll('.slide-caption');
    if (slideCaptions.length >= 4) {
        slideCaptions[0].textContent = translations[lang]["slide_caption_1"];
        slideCaptions[1].textContent = translations[lang]["slide_caption_2"];
        slideCaptions[2].textContent = translations[lang]["slide_caption_3"];
        slideCaptions[3].textContent = translations[lang]["slide_caption_4"];
    }
    
    // Update CTA banner
    document.querySelector('.cta-text').textContent = translations[lang]["cta_text"];
    document.querySelector('.cta-button-alt').textContent = translations[lang]["see_package"];
    
    // Update footer
    const footerColumns = document.querySelectorAll('.footer-column');
    if (footerColumns.length >= 4) {
        footerColumns[0].querySelector('h3').textContent = translations[lang]["about_us"];
        footerColumns[0].querySelector('p').textContent = translations[lang]["about_desc"];
        
        footerColumns[1].querySelector('h3').textContent = translations[lang]["quick_links"];
        const quickLinks = footerColumns[1].querySelectorAll('a');
        if (quickLinks.length >= 4) {
            quickLinks[0].textContent = translations[lang]["services"];
            quickLinks[1].textContent = translations[lang]["coverage"];
            quickLinks[2].textContent = translations[lang]["pricing"];
            quickLinks[3].textContent = translations[lang]["testimonials"];
        }
        
        footerColumns[2].querySelector('h3').textContent = translations[lang]["support"];
        const supportLinks = footerColumns[2].querySelectorAll('a');
        if (supportLinks.length >= 4) {
            supportLinks[0].textContent = translations[lang]["faq"];
            supportLinks[1].textContent = translations[lang]["contact_us_footer"];
            supportLinks[2].textContent = translations[lang]["track_shipment"];
            supportLinks[3].textContent = translations[lang]["terms"];
        }
        
        footerColumns[3].querySelector('h3').textContent = translations[lang]["contact_info"];
    }
    
    document.querySelector('.copyright p').textContent = translations[lang]["copyright"];
}

// Update language toggle button text
function updateLangToggleButton() {
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'ID/EN' : 'EN/ID';
    });
}