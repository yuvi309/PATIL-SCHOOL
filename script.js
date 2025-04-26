// Admission Form Validation and Submission
const form = document.getElementById('admissionForm');
const formMessage = document.getElementById('formMessage');

if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple validation
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const classSelected = form.class.value;
        if(!name || !phone || !email || !classSelected) {
            formMessage.textContent = 'Please fill all fields correctly!';
            formMessage.style.color = '#e53935';
            return;
        }
        // Demo: Just show a message
        formMessage.textContent = `Thank you, ${name}! We have received your application.`;
        formMessage.style.color = '#43a047';
        form.reset();
    });
}

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

