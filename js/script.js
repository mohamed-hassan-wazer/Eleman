const translations = {
    en: {
        // Hero Section
        "About Us": "About Us",
        "Services": "Services",
        "Contact Us": "Contact Us",
        "Explore Services":"Explore Services",
        "Driving Innovation in the Oil Industry":"Provide reliable and efficient solutions for oil collection and transportation.",
        "Delivering energy solutions with excellence and sustainability.":"Eleman Company specializes in the collection and safe transfer of oil, ensuring efficiency and sustainability..",
        // Services Section
        "Our Services": "Our Services",
        "Collect Oil": "Collect Oil",
        "Transport Oil": "Transport Oil",
        "Recycle Oil": "Recycle Oil",
        "Professional oil collection services using advanced techniques.": "Professional oil collection services using advanced techniques.",
        "Secure and efficient oil transportation solutions.": "Secure and efficient oil transportation solutions.",
        "Sustainable solutions for oil recycling and reuse.": "Sustainable solutions for oil recycling and reuse.",
        //contact
        "Your Name":"Your Name",
        "Your Email":"Your Email",
        "Your Message":"Your Message",
        "Send Message":"Send Message"
    },
    ar: {
        // Hero Section
        "About Us": "من نحن",
        "Services": "الخدمات",
        "Contact Us": "اتصل بنا",
        "Explore Services":"تصفح الخدمات",
        "Driving Innovation in the Oil Industry": "توفير حلول موثوقة وفعالة لجمع ونقل النفط.",
        "Delivering energy solutions with excellence and sustainability.": "تختص شركة الايمان في جمع ونقل النفط بأمان لجميع شركات المحروقات وشركات العزل وجميع مصانع الاسمنت، مع ضمان الكفاءة والاستدامة",
        // Services Section  
        "Our Services": "خدماتنا",
        "Collect Oil": "جمع النفط",
        "Transport Oil": "نقل النفط",
        "Recycle Oil": "إعادة تدوير النفط",
        "Professional oil collection services using advanced techniques.": "خدمات جمع النفط باستخدام تقنيات متقدمة.",
        "Secure and efficient oil transportation solutions.": "حلول آمنة وفعالة لنقل النفط.",
        "Sustainable solutions for oil recycling and reuse.": "حلول مستدامة لإعادة تدوير النفط وإعادة استخدامه.",
        //contact
        "Your Name":"الاسم",
        "Your Email":"الايميل",
        "Your Message":"الرسالة",
        "Send Message":"ارسل الرسالة"
        
    }
};


const elementsToTranslate = document.querySelectorAll("[data-lang]");
const placeholdersToTranslate = document.querySelectorAll("[data-lang-placeholder]");

document.getElementById("en-btn").addEventListener("click", () => setLanguage("en"));
document.getElementById("ar-btn").addEventListener("click", () => setLanguage("ar"));

function setLanguage(lang) {
    elementsToTranslate.forEach(el => {
        el.textContent = translations[lang][el.dataset.lang];
    });

    placeholdersToTranslate.forEach(el => {
        el.placeholder = translations[lang][el.dataset.langPlaceholder];
    });

    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
    document.body.style.textAlign = lang === "ar" ? "right" : "left";
}
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('send_message.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => alert('Error sending the message. Please try again.'));
});