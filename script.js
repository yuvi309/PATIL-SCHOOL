// Nav Dropdown Logic
const navDropdowns = document.querySelectorAll('nav ul li.dropdown');
navDropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('a');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Always close all dropdowns first
    navDropdowns.forEach(d => d.classList.remove('open'));
    // Toggle this one
    dropdown.classList.toggle('open');
    // Store dropdown state in sessionStorage
    sessionStorage.setItem('navDropdownOpen', dropdown.classList.contains('open'));
  });
});
// On page load, always close dropdowns (fix stuck state after navigation)
window.addEventListener('DOMContentLoaded', function() {
  navDropdowns.forEach(d => d.classList.remove('open'));
  sessionStorage.removeItem('navDropdownOpen');
});
document.addEventListener('click', function(e) {
  navDropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
});

// Hero Image Slider
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;
if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}

// Simple fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mandatory Public Disclosure Modal Logic
const mandatoryNav = document.getElementById('mandatoryNav');
const mandatoryModal = document.getElementById('mandatoryModal');
const closeMandatoryModal = document.getElementById('closeMandatoryModal');
const docViewer = document.getElementById('docViewer');

const docLinks = {
  'society': 'https://example.com/docs/society.pdf',
  'certificate': 'https://example.com/docs/certificate.pdf',
  'smc': 'https://example.com/docs/smc.pdf',
  'pta': 'https://example.com/docs/pta.pdf',
  'academic-calendar': 'https://example.com/docs/academic-calendar.pdf',
  'fee-structure': 'https://example.com/docs/fee-structure.pdf',
  'self-certificate': 'https://example.com/docs/self-certificate.pdf',
  'fire-safety': 'https://example.com/docs/fire-safety.pdf',
  'drinking-water': 'https://example.com/docs/drinking-water.pdf',
  'building-safety': 'https://example.com/docs/building-safety.pdf',
  'state-registration': 'https://example.com/docs/state-registration.pdf',
  'noc': 'https://example.com/docs/noc.pdf',
  'mandatory-disclosure': 'https://example.com/docs/mandatory-disclosure.pdf',
  'affidavit': 'https://example.com/docs/affidavit.pdf',
  'water-sample-test': 'https://example.com/docs/water-sample-test.pdf',
  'land-certificate': 'https://example.com/docs/land-certificate.pdf'
};

if (mandatoryNav && mandatoryModal && closeMandatoryModal) {
  mandatoryNav.addEventListener('click', function(e) {
    e.preventDefault();
    mandatoryModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  closeMandatoryModal.addEventListener('click', function() {
    mandatoryModal.style.display = 'none';
    document.body.style.overflow = '';
    docViewer.innerHTML = '<p>Select a document to view.</p>';
  });
  window.addEventListener('click', function(e) {
    if (e.target === mandatoryModal) {
      mandatoryModal.style.display = 'none';
      document.body.style.overflow = '';
      docViewer.innerHTML = '<p>Select a document to view.</p>';
    }
  });
  document.querySelectorAll('.mandatory-list li').forEach(function(item) {
    item.addEventListener('click', function() {
      const docKey = this.getAttribute('data-doc');
      const link = docLinks[docKey];
      if (link) {
        if (link.match(/\.(jpg|jpeg|png|gif)$/i)) {
          docViewer.innerHTML = `<img src="${link}" alt="${docKey}">`;
        } else {
          docViewer.innerHTML = `<iframe src="${link}" width="100%" height="400px"></iframe>`;
        }
      } else {
        docViewer.innerHTML = '<p>Document not found.</p>';
      }
    });
  });
}
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
.nav-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}
nav ul li {
    position: relative;
}
nav ul li.dropdown > .dropdown-menu {
    display: none;
    position: absolute;
    top: 110%;
    left: 0;
    background: #fff;
    min-width: 170px;
    box-shadow: 0 6px 24px rgba(42,125,173,0.12);
    border-radius: 12px;
    padding: 0.5rem 0;
    z-index: 1000;
}
nav ul li.dropdown:hover > .dropdown-menu {
    display: block;
}
nav ul li.dropdown.open > .dropdown-menu {
    display: block;
}
@media (max-width: 900px) {
    nav ul li.dropdown:hover > .dropdown-menu {
        display: none;
    }
    nav ul li.dropdown.open > .dropdown-menu {
        display: block;
    }
}
nav ul li.dropdown > a {
    cursor: pointer;
    user-select: none;
}
nav ul li .dropdown-menu a {
    color: #2A7DAD;
    padding: 0.7rem 1.2rem;
    display: block;
    text-decoration: none;
    font-weight: 500;
    border-radius: 8px;
    transition: background 0.18s, color 0.18s;
}
nav ul li .dropdown-menu a:hover {
    background: #eaf5e0;
    color: #43a047;
}
.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.logo img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ffd600;
}
.logo span {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.1;
}
nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}
nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
}
nav a:hover {
    color: #9bbc44;
}
.hero {
    background: #1a237e;
    color: #fff;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.hero-slider {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.hero-slider img.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s;
    left: 0; top: 0;
}
.hero-slider img.slide.active {
    opacity: 0.7;
    z-index: 2;
}
.hero-content {
    z-index: 3;
    position: relative;
}
.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}
.hero p {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
}
.btn {
    background: #9bbc44;
    color: #fff;
    font-weight: 600;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
    display: inline-block;
}
.btn:hover {
    background: #2A7DAD;
    color: #fff;
}
section {
    margin: 2.5rem 0;
}
h2 {
    color: #2A7DAD;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.about-section ul.highlights {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    margin: 1rem 0 0 0;
}
.about-image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.5rem;
    margin: 2.5rem 0 1.5rem 0;
}
.about-image-item {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 16px rgba(42,125,173,0.10), 0 1.5px 8px rgba(67,160,71,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 1rem 1rem 1rem;
    transition: transform 0.18s, box-shadow 0.18s;
}
.about-image-item img {
    width: 100%;
    max-width: 170px;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.8rem;
    background: #e0eafc;
}
.about-image-item span {
    font-weight: 600;
    color: #2A7DAD;
    font-size: 1.08rem;
    text-align: center;
    margin-top: 0.2rem;
}
.about-image-item:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 8px 32px 0 rgba(42,125,173,0.14), 0 2px 12px rgba(67,160,71,0.12);
}
.faculty-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 2rem;
    margin: 2.5rem 0 1.5rem 0;
}
.faculty-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(42,125,173,0.10), 0 1.5px 8px rgba(67,160,71,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 1.2rem 1rem;
    transition: transform 0.18s, box-shadow 0.18s;
}
.faculty-card img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1.1rem;
    background: #e0eafc;
    box-shadow: 0 1px 6px rgba(42,125,173,0.08);
}
.faculty-name {
    font-weight: 700;
    color: #2A7DAD;
    font-size: 1.13rem;
    margin-bottom: 0.3rem;
    text-align: center;
}
.faculty-role {
    font-size: 1.01rem;
    color: #555;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.3rem;
}
.faculty-card:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 8px 32px 0 rgba(42,125,173,0.14), 0 2px 12px rgba(67,160,71,0.12);
}
.about-section ul.highlights li {
    background: #eaf5e0;
    color: #2A7DAD;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(42,125,173,0.03);
}
.courses-list, .facilities-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.course-card, .facility-card {
    background: #fff;
    color: #1a237e;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(26,35,126,0.08);
    margin-bottom: 1rem;
    min-width: 120px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
}
.course-card:hover, .facility-card:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 6px 24px rgba(67,160,71,0.15);
}
.facility-photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.5rem;
    margin: 2.5rem 0 1.5rem 0;
}
.facility-photo-item {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 16px rgba(42,125,173,0.10), 0 1.5px 8px rgba(67,160,71,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 1rem 1rem 1rem;
    transition: transform 0.18s, box-shadow 0.18s;
}
.facility-photo-item img {
    width: 100%;
    max-width: 170px;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.8rem;
    background: #e0eafc;
}
.facility-photo-item span {
    font-weight: 600;
    color: #2A7DAD;
    font-size: 1.08rem;
    text-align: center;
    margin-top: 0.2rem;
}
.facility-photo-item:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 8px 32px 0 rgba(42,125,173,0.14), 0 2px 12px rgba(67,160,71,0.12);
}
form#admissionForm {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(26,35,126,0.04);
    max-width: 550px;
}
form#admissionForm input, form#admissionForm select {
    flex: 1 1 200px;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid #bdbdbd;
    font-size: 1rem;
}
form#admissionForm button {
    flex: 1 1 100%;
}
#formMessage {
    margin-top: 1rem;
    font-weight: 600;
    color: #43a047;
}
.contact-section .social-media {
    margin: 1.5rem 0 1rem 0;
    display: flex;
    gap: 1.2rem;
}
.contact-section .social-media a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
    box-shadow: 0 4px 16px rgba(42,125,173,0.10), 0 1.5px 8px rgba(67,160,71,0.08);
    margin: 0 4px;
    position: relative;
    overflow: hidden;
    border: 1.5px solid rgba(67,160,71,0.12);
    transition: transform 0.25s, box-shadow 0.25s, background 0.3s;
    backdrop-filter: blur(3.5px);
}
.contact-section .social-media a:hover {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    box-shadow: 0 8px 32px 0 rgba(42,125,173,0.18), 0 2px 12px rgba(67,160,71,0.14);
    transform: scale(1.18) rotate(-6deg);
    border-color: #43e97b;
}
.contact-section .social-media img {
    width: 28px;
    height: 28px;
    filter: grayscale(0.1) drop-shadow(0 0 0.5px #fff);
    transition: filter 0.2s, transform 0.2s;
}
.contact-section .social-media a:hover img {
    filter: none drop-shadow(0 0 8px #43e97b);
    transform: scale(1.13) rotate(6deg);
}
.contact-section .social-media img:hover {
    filter: grayscale(0) drop-shadow(0 0 6px #ffd600);
    transform: scale(1.13);
}
.qr-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.2rem 0 0.5rem 0;
    padding: 1rem 0.5rem;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(42,125,173,0.08);
    max-width: 210px;
    margin-left: auto;
    margin-right: auto;
}
.qr-code-large {
    max-width: 340px;
    padding: 2rem 1rem 1.5rem 1rem;
}
.qr-code-large img {
    width: 220px;
    height: 220px;
    max-width: 100%;
    border-radius: 16px;
    margin-top: 0.2rem;
    background: #e0eafc;
    box-shadow: 0 4px 18px rgba(42,125,173,0.12);
}
.qr-code img {
    width: 110px;
    height: 110px;
    margin-top: 0.2rem;
    border-radius: 10px;
    background: #e0eafc;
    box-shadow: 0 1px 6px rgba(42,125,173,0.08);
}
.qr-label {
    margin-top: 0.6rem;
    font-size: 1.08rem;
    color: #2A7DAD;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-align: center;
}
.pamphlet-container {
    width: 100%;
    margin: 0;
    padding: 0;
    background: none;
    border-radius: 0;
    box-shadow: none;
    display: block;
}
.pamphlet-container img {
    width: 100%;
    max-width: 100vw;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    background: none;
    display: block;
}
.pamphlet-label {
    font-size: 1.13rem;
    color: #2A7DAD;
    font-weight: 600;
    text-align: center;
    margin-top: 0.2rem;
}
.map-container {
    margin: 2.2rem auto 0 auto;
    max-width: 540px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(42,125,173,0.10);
}
footer {
    background: #2A7DAD;
    color: #fff;
    padding: 1rem 0;
}
.footer-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}
.footer-links a, .footer-social a {
    color: #9bbc44;
    margin-left: 1rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
}
.footer-social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
    box-shadow: 0 4px 16px rgba(42,125,173,0.10), 0 1.5px 8px rgba(67,160,71,0.08);
    margin: 0 4px;
    position: relative;
    overflow: hidden;
    border: 1.5px solid rgba(67,160,71,0.12);
    transition: transform 0.25s, box-shadow 0.25s, background 0.3s;
    backdrop-filter: blur(3.5px);
}
.footer-social a:hover {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    box-shadow: 0 8px 32px 0 rgba(42,125,173,0.18), 0 2px 12px rgba(67,160,71,0.14);
    transform: scale(1.15) rotate(-6deg);
    border-color: #43e97b;
}
.footer-social img {
    width: 24px;
    height: 24px;
    filter: grayscale(0.1) drop-shadow(0 0 0.5px #fff);
    transition: filter 0.2s, transform 0.2s;
}
.footer-social a:hover img {
    filter: none drop-shadow(0 0 8px #43e97b);
    transform: scale(1.13) rotate(6deg);
}
/* Gallery Grid */
.gallery-section {
    margin-top: 2rem;
}
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.2rem;
    margin-top: 1rem;
}
.gallery-grid img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(26,35,126,0.07);
    transition: transform 0.25s, box-shadow 0.25s;
}
.gallery-grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(67,160,71,0.18);
}

@media (max-width: 900px) {
    .nav-flex, .footer-flex {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    nav ul {
        flex-direction: column;
        gap: 0.5rem;
    }
    .courses-list, .facilities-list {
        flex-direction: column;
        gap: 0.5rem;
    }
    .gallery-grid img {
        height: 130px;
    }
}
/* Modal Styles for Mandatory Public Disclosure */
.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(42,125,173,0.65);
}
.modal-content {
  background-color: #fff;
  margin: 3% auto;
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 18px;
  width: 96%;
  max-width: 540px;
  position: relative;
  box-shadow: 0 6px 32px rgba(26,35,126,0.25);
}
.close {
  color: #1a237e;
  position: absolute;
  top: 18px;
  right: 28px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
}
.close:hover {
  color: #e53935;
}
.mandatory-list {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
.mandatory-list li {
  background: #eaf5e0;
  color: #2A7DAD;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  font-size: 1rem;
  box-shadow: 0 1px 6px rgba(42,125,173,0.07);
}
.mandatory-list li:hover {
  background: #9bbc44;
  color: #fff;
}
.doc-viewer {
  min-height: 180px;
  background: #f7f9fb;
  border-radius: 7px;
  padding: 1.2rem 0.7rem 1.2rem 0.7rem;
  box-shadow: 0 1px 6px rgba(26,35,126,0.05);
  text-align: center;
}
.doc-viewer iframe, .doc-viewer img {
  width: 100%;
  max-width: 420px;
  min-height: 320px;
  border: none;
  margin: 0 auto;
  display: block;
}
@media (max-width: 600px) {
    .container {
        width: 98%;
    }
    .hero h1 {
        font-size: 1.5rem;
    }
    .logo span {
        font-size: 1rem;
    }
    form#admissionForm {
        padding: 0.5rem;
    }
    .modal-content {
        width: 98%;
        padding: 0.7rem 0.2rem 0.7rem 0.2rem;
        min-width: unset;
        max-width: 99vw;
    }
    .mandatory-list {
        flex-direction: column;
        gap: 0.5rem;
        max-height: 45vh;
        overflow-y: auto;
        margin-bottom: 1rem;
    }
    .mandatory-list li {
        width: 100%;
        font-size: 1.05rem;
        padding: 1rem 0.6rem;
        text-align: left;
        border-radius: 7px;
    }
    .doc-viewer {
        min-height: 120px;
        padding: 0.5rem 0.2rem;
        max-width: 100vw;
        overflow-x: auto;
    }
    .doc-viewer iframe, .doc-viewer img {
        min-height: 120px;
        max-width: 98vw;
        width: 100%;
    }
    .close {
        top: 10px;
        right: 14px;
        font-size: 1.5rem;
    }
}
