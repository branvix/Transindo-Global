// FAQ page translations
const faqTranslations = {
    en: {
        // Navigation
        "faq": "FAQ",
        "our_group": "Our Group",
        "price_list": "Price List",
        
        // FAQ Page
        "faq_title": "Frequently Asked Questions",
        "faq_q1": "What is cargo service?",
        "faq_a1": "Cargo service is the transportation of goods in bulk, heavy, or large volume via land, sea, or air transportation. It is typically used by businesses or individuals who need efficient shipping of goods.",
        "faq_q2": "What types of cargo services are available?",
        "faq_q3": "What items can be shipped through cargo?",
        "faq_q4": "How is the shipping cost calculated?",
        "faq_q5": "How long does shipping take?",
        "faq_q6": "Can I track my shipment?",
        "faq_q7": "Are the goods insured?",
        "faq_q8": "What should I do if items are damaged or lost?",
        "faq_q9": "Are there weight or size limitations for cargo?",
        "faq_q10": "What documents are required for shipping?",
        "faq_q11": "Are there special requirements for certain goods?",
        "faq_q12": "What differentiates regular and express services?",
        "faq_q13": "Does cargo service offer inter-island shipping?",
        
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
        
        // FAQ Page
        "faq_title": "Pertanyaan yang Sering Diajukan",
        "faq_q1": "Apa itu jasa cargo?",
        "faq_a1": "Jasa cargo adalah layanan pengiriman barang dalam jumlah besar, berat, atau dalam volume besar melalui transportasi darat, laut, atau udara. Biasanya digunakan oleh bisnis atau individu yang membutuhkan pengiriman barang secara efisien.",
        "faq_q2": "Apa saja jenis layanan cargo yang tersedia?",
        "faq_q3": "Barang apa saja yang bisa dikirim melalui cargo?",
        "faq_q4": "Bagaimana cara menghitung biaya pengiriman?",
        "faq_q5": "Berapa lama waktu pengiriman?",
        "faq_q6": "Bisakah saya melacak pengiriman barang?",
        "faq_q7": "Apakah barang diasuransikan?",
        "faq_q8": "Apa yang harus dilakukan jika barang rusak atau hilang?",
        "faq_q9": "Apakah ada batasan berat atau ukuran barang?",
        "faq_q10": "Apa saja dokumen yang diperlukan untuk pengiriman?",
        "faq_q11": "Apakah ada syarat khusus untuk barang tertentu?",
        "faq_q12": "Apa yang membedakan layanan reguler dan ekspres?",
        "faq_q13": "Apakah layanan cargo melayani pengiriman antar pulau?",
        
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
function applyFaqTranslations() {
    const trans = faqTranslations[currentLanguage];
    
    // Update FAQ title
    const faqTitle = document.querySelector('.faq-title');
    if (faqTitle) faqTitle.textContent = trans.faq_title;
    
    // Update FAQ questions
    const questions = document.querySelectorAll('.faq-question span');
    for (let i = 0; i < questions.length; i++) {
        const key = `faq_q${i+1}`;
        if (trans[key]) {
            questions[i].textContent = trans[key];
        }
    }
    
    // Update first FAQ answer (which is a simple paragraph)
    const firstAnswer = document.querySelector('.faq-answer p');
    if (firstAnswer && trans.faq_a1) {
        firstAnswer.textContent = trans.faq_a1;
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
    applyFaqTranslations();
    
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
    applyFaqTranslations();
    
    // Set language toggle button text
    const langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'ID/EN' : 'EN/ID';
    });
});