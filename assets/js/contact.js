// contact.js — validation and WhatsApp integration
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const sendBtn = document.getElementById('sendWhatsApp');
    const phoneInput = document.getElementById('phone');

    function setError(id, message) {
        const el = document.getElementById(id);
        if (el) el.textContent = message || '';
    }

    function validate() {
        let ok = true;
        const name = (document.getElementById('name').value || '').trim();
        const phone = (phoneInput.value || '').replace(/\D/g,'').trim();
        const roomType = (document.getElementById('roomType').value || '').trim();
        const message = (document.getElementById('message').value || '').trim();

        setError('err-name', ''); setError('err-phone',''); setError('err-roomType',''); setError('err-message','');

        if (!name) { setError('err-name','Name is required'); ok = false; }
        if (!phone) { setError('err-phone','Phone number is required'); ok = false; }
        else if (!/^\d{10}$/.test(phone)) { setError('err-phone','Enter a valid 10-digit number'); ok = false; }
        if (!roomType) { setError('err-roomType','Please select a room type'); ok = false; }
        if (!message) { setError('err-message','Message cannot be empty'); ok = false; }

        return { ok, name, phone, roomType, message };
    }

    sendBtn.addEventListener('click', function () {
        const result = validate();
        if (!result.ok) return;

        const email = (document.getElementById('email').value || '').trim();
        const joiningDate = (document.getElementById('joiningDate').value || '').trim();

        // Build message (no emojis)
        const template = `Hostel Room Enquiry\n\nName:\n${result.name}\n\nPhone:\n${result.phone}\n\nEmail:\n${email || '-'}\n\nRoom Type:\n${result.roomType}\n\nPreferred Joining Date:\n${joiningDate || '-'}\n\nMessage:\n${result.message}\n\nThank you.`;

        const encoded = encodeURIComponent(template);
        const waNumber = '919440356726';
        const url = `https://wa.me/${waNumber}?text=${encoded}`;

        // Open WhatsApp in new tab/window — smooth UX
        window.open(url, '_blank');
    });

    // small nicety: restrict phone input to digits
    phoneInput.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 10) this.value = this.value.slice(0,10);
    });

    // reveal animations
    const fadeEls = document.querySelectorAll('.fade-up-scroll');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => obs.observe(el));

});
