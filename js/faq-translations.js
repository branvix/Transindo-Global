// FAQ page translations
const faqTranslations = {
    en: {
        // Navigation
        "faq": "FAQ",
        "our_group": "Global Partners",
        "price_list": "Price List",
        
        // FAQ Page
        "faq_title": "Frequently Asked Questions",
        "faq_q1": "What services do you offer?",
        "faq_a1": "We specialize in shipping cargo from Asia-Pacific countries to Indonesia, including freight forwarding, custom brokerage, and door-to-door delivery.",
        "faq_q2": "Which countries do you ship from?",
        "faq_a2": "We handle shipments from major Asia-Pacific countries, including China, Singapore, Malaysia, Thailand, Vietnam, South Korea, Japan, and more.",
        "faq_q3": "What shipping options are available?",
        "faq_a3": "We offer air freight for fast deliveries and sea freight for cost-effective bulk shipments.",
        "faq_q4": "How long does shipping take?",
        "faq_a4": "Transit times vary based on the origin country, shipping method, and customs processing. Contact us for estimated delivery times.",
        "faq_q5": "Do you handle customs brokerage in Indonesia?",
        "faq_a5": "Yes, we provide custom brokerage services and handle all customs procedures to ensure smooth clearance and timely delivery.",
        "faq_q6": "Can you arrange door-to-door delivery in Indonesia?",
        "faq_a6": "Yes, we offer door-to-door services, including pickup from the origin country and final delivery to any location in Indonesia.",
        "faq_q7": "What are the shipping costs?",
        "faq_a7": "Costs depend on cargo size, weight, origin, and shipping method. Contact us for a detailed quote.",
        "faq_q8": "What types of cargo do you handle?",
        "faq_a8": "We transport general goods, machinery, electronics, textiles, and more. Contact us for special cargo inquiries.",
        "faq_q9": "Is cargo insurance available?",
        "faq_a9": "Yes, we offer insurance options to protect your shipment from potential risks.",
        "faq_q10": "How do I book a shipment?",
        "faq_a10": "You can book by contacting us via phone, email, or our website. Our team will guide you through the process.",
        
        // CTA Banner
        "cta_text": "Build a Valuable & Profitable Business with Us",
        "see_package": "Start Now",
        
        // Footer
        "about_us": "ABOUT US",
        "about_desc": "Transindo Global is a premium delivery service dedicated to excellence in global logistics, serving businesses Across Asia Pacific (APAC).",
        "contact_info": "CONTACT INFO",
        "copyright": "© 2025 Transindo Global. All Rights Reserved."
    },
    id: {
        // Navigation
        "faq": "FAQ",
        "our_group": "Mitra Global",
        "price_list": "Daftar Harga",
        
        // FAQ Page
        "faq_title": "Pertanyaan yang Sering Diajukan",
        "faq_q1": "Layanan apa yang Anda tawarkan?",
        "faq_a1": "Kami mengkhususkan diri dalam pengiriman kargo dari negara-negara Asia-Pasifik ke Indonesia, termasuk freight forwarding, custom brokerage, dan pengiriman door-to-door.",
        "faq_q2": "Dari negara mana saja Anda melakukan pengiriman?",
        "faq_a2": "Kami menangani pengiriman dari negara-negara utama Asia-Pasifik, termasuk China, Singapura, Malaysia, Thailand, Vietnam, Korea Selatan, Jepang, dan lainnya.",
        "faq_q3": "Opsi pengiriman apa saja yang tersedia?",
        "faq_a3": "Kami menawarkan kargo udara untuk pengiriman cepat dan kargo laut untuk pengiriman massal yang hemat biaya.",
        "faq_q4": "Berapa lama waktu pengiriman?",
        "faq_a4": "Waktu transit bervariasi berdasarkan negara asal, metode pengiriman, dan proses bea cukai. Hubungi kami untuk perkiraan waktu pengiriman.",
        "faq_q5": "Apakah Anda menangani keperantaraan bea cukai di Indonesia?",
        "faq_a5": "Ya, kami menyediakan layanan custom brokerage dan menangani semua prosedur bea cukai untuk memastikan kelancaran pengurusan dan pengiriman tepat waktu.",
        "faq_q6": "Bisakah Anda mengatur pengiriman door-to-door di Indonesia?",
        "faq_a6": "Ya, kami menawarkan layanan door-to-door, termasuk pengambilan dari negara asal dan pengiriman akhir ke lokasi mana pun di Indonesia.",
        "faq_q7": "Berapa biaya pengiriman?",
        "faq_a7": "Biaya tergantung pada ukuran kargo, berat, asal, dan metode pengiriman. Hubungi kami untuk penawaran terperinci.",
        "faq_q8": "Jenis kargo apa yang Anda tangani?",
        "faq_a8": "Kami mengangkut barang umum, mesin, elektronik, tekstil, dan lainnya. Hubungi kami untuk pertanyaan tentang kargo khusus.",
        "faq_q9": "Apakah asuransi kargo tersedia?",
        "faq_a9": "Ya, kami menawarkan opsi asuransi untuk melindungi pengiriman Anda dari potensi risiko.",
        "faq_q10": "Bagaimana cara memesan pengiriman?",
        "faq_a10": "Anda dapat memesan melalui telepon, email, atau situs web kami. Tim kami akan memandu Anda melalui prosesnya.",
        
        // CTA Banner
        "cta_text": "Bangun Bisnis yang Bernilai & Menguntungkan Bersama Kami",
        "see_package": "Mulai Sekarang",
        
        // Footer
        "about_us": "TENTANG KAMI",
        "about_desc": "Transindo Global adalah layanan pengiriman premium yang didedikasikan untuk keunggulan dalam logistik global, melayani bisnis di seluruh Asia Pasifik (APAC).",
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
    
    // Update FAQ questions and answers
    for (let i = 1; i <= 10; i++) {
        const questionKey = `faq_q${i}`;
        const answerKey = `faq_a${i}`;
        
        const questionElement = document.querySelector(`.faq-question span[data-i18n="${questionKey}"]`);
        const answerElement = document.querySelector(`.faq-answer p[data-i18n="${answerKey}"]`);
        
        if (questionElement && trans[questionKey]) {
            questionElement.textContent = trans[questionKey];
        }
        
        if (answerElement && trans[answerKey]) {
            answerElement.textContent = trans[answerKey];
        }
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