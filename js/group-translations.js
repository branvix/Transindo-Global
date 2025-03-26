// Group page translations
const groupTranslations = {
    en: {
        // Navigation
        "faq": "FAQ",
        "our_group": "Our Group",
        "price_list": "Price List",
        
        // Group Page
        "group_title": "Our Group Companies",
        "group_subtitle": "Transindo Global is part of a powerful network of logistics and business services companies, working together to provide comprehensive solutions for our clients worldwide.",
        "company1_name": "Transindo Express",
        "company1_desc": "Our flagship express delivery service specializing in time-sensitive shipments across Southeast Asia with guaranteed delivery timeframes and real-time tracking.",
        "company2_name": "Trans Logistics Solutions",
        "company2_desc": "Full-service logistics provider offering warehousing, inventory management, order fulfillment, and customs brokerage for businesses of all sizes.",
        "company3_name": "TransGlobal Consulting",
        "company3_desc": "Business advisory services focused on helping companies optimize their supply chain, enter new markets, and develop international business strategies.",
        "learn_more": "Learn More",
        
        // CTA Banner
        "cta_text": "Build a Valuable & Profitable Business with Us",
        "see_package": "See the Package →",
        
        // Footer
        "about_us": "ABOUT US",
        "about_desc": "Transindo Global is a premium delivery service dedicated to excellence in global logistics, serving businesses across Southeast Asia and beyond.",
        "contact_info": "CONTACT INFO",
        "copyright": "© 2025 Transindo Global. All Rights Reserved."
    },
    id: {
        // Navigation
        "faq": "FAQ",
        "our_group": "Grup Kami",
        "price_list": "Daftar Harga",
        
        // Group Page
        "group_title": "Perusahaan Grup Kami",
        "group_subtitle": "Transindo Global adalah bagian dari jaringan kuat perusahaan jasa logistik dan bisnis, bekerja sama untuk menyediakan solusi komprehensif bagi klien kami di seluruh dunia.",
        "company1_name": "Transindo Express",
        "company1_desc": "Layanan pengiriman ekspres unggulan kami yang mengkhususkan diri dalam pengiriman dengan tenggat waktu ketat di seluruh Asia Tenggara dengan jaminan waktu pengiriman dan pelacakan real-time.",
        "company2_name": "Trans Logistics Solutions",
        "company2_desc": "Penyedia logistik layanan lengkap yang menawarkan pergudangan, manajemen inventaris, pemenuhan pesanan, dan perantara bea cukai untuk bisnis dari segala ukuran.",
        "company3_name": "TransGlobal Consulting",
        "company3_desc": "Layanan konsultasi bisnis yang fokus membantu perusahaan mengoptimalkan rantai pasokan mereka, memasuki pasar baru, dan mengembangkan strategi bisnis internasional.",
        "learn_more": "Pelajari Lebih Lanjut",
        
        // CTA Banner
        "cta_text": "Bangun Bisnis yang Bernilai & Menguntungkan Bersama Kami",
        "see_package": "Lihat Paket →",
        
        // Footer
        "about_us": "TENTANG KAMI",
        "about_desc": "Transindo Global adalah layanan pengiriman premium yang didedikasikan untuk keunggulan dalam logistik global, melayani bisnis di seluruh Asia Tenggara dan sekitarnya.",
        "contact_info": "INFO KONTAK",
        "copyright": "© 2025 Transindo Global. Hak Cipta Dilindungi."
    }
};

// Get current language or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Apply translations based on language
function applyGroupTranslations() {
    const trans = groupTranslations[currentLanguage];
    
    // Update group title and subtitle
    const groupTitle = document.querySelector('.group-title');
    if (groupTitle) groupTitle.textContent = trans.group_title;
    
    const groupSubtitle = document.querySelector('.group-subtitle');
    if (groupSubtitle) groupSubtitle.textContent = trans.group_subtitle;
    
    // Update company boxes
    const companyBoxes = document.querySelectorAll('.group-box');
    if (companyBoxes.length >= 3) {
        // Company 1
        const name1 = companyBoxes[0].querySelector('.group-name');
        const desc1 = companyBoxes[0].querySelector('.group-description');
        const cta1 = companyBoxes[0].querySelector('.group-cta');
        
        if (name1) name1.textContent = trans.company1_name;
        if (desc1) desc1.textContent = trans.company1_desc;
        if (cta1) cta1.textContent = trans.learn_more;
        
        // Company 2
        const name2 = companyBoxes[1].querySelector('.group-name');
        const desc2 = companyBoxes[1].querySelector('.group-description');
        const cta2 = companyBoxes[1].querySelector('.group-cta');
        
        if (name2) name2.textContent = trans.company2_name;
        if (desc2) desc2.textContent = trans.company2_desc;
        if (cta2) cta2.textContent = trans.learn_more;
        
        // Company 3
        const name3 = companyBoxes[2].querySelector('.group-name');
        const desc3 = companyBoxes[2].querySelector('.group-description');
        const cta3 = companyBoxes[2].querySelector('.group-cta');
        
        if (name3) name3.textContent = trans.company3_name;
        if (desc3) desc3.textContent = trans.company3_desc;
        if (cta3) cta3.textContent = trans.learn_more;
    }
    
    // Update navigation
    const navButtons = document.querySelectorAll('.nav-button');
    if (navButtons.length >= 3) {
        navButtons[0].textContent = trans.faq;
        navButtons[1].textContent = trans.our_group;
        navButtons[2].textContent = trans.price_list;
    }
    
    // Update mobile menu
    const mobileNavButtons = document.querySelectorAll('#mobile-menu .nav-button');
    if (mobileNavButtons.length >= 3) {
        mobileNavButtons[0].textContent = trans.faq;
        mobileNavButtons[1].textContent = trans.our_group;
        mobileNavButtons[2].textContent = trans.price_list;
    }
    
    // Update CTA section
    const ctaText = document.querySelector('.cta-text');
    if (ctaText) ctaText.textContent = trans.cta_text;
    
    const ctaButton = document.querySelector('.cta-button-alt');
    if (ctaButton) ctaButton.textContent = trans.see_package;
    
    // Update footer
    const aboutUsHeader = document.querySelector('.footer-column h3[data-i18n="about_us"]');
    if (aboutUsHeader) aboutUsHeader.textContent = trans.about_us;
    
    const aboutDesc = document.querySelector('.footer-column p[data-i18n="about_desc"]');
    if (aboutDesc) aboutDesc.textContent = trans.about_desc;
    
    const contactInfo = document.querySelector('.footer-column h3[data-i18n="contact_info"]');
    if (contactInfo) contactInfo.textContent = trans.contact_info;
    
    const copyright = document.querySelector('.copyright p');
    if (copyright) copyright.textContent = trans.copyright;
}

// Toggle language function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    // Apply translations
    applyGroupTranslations();
    
    // Update language toggle button text
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'ID/EN' : 'EN/ID';
    });
    
    return false;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Apply translations
    applyGroupTranslations();
    
    // Set language toggle button text
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'ID/EN' : 'EN/ID';
    });
});