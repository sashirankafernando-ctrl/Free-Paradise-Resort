document.addEventListener("DOMContentLoaded", () => {
    // Mobile Nav Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sticky Navbar Styling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // Booking Modal Functionality
    const bookBtns = document.querySelectorAll('.btn-book-now');
    const modalOverlay = document.getElementById('bookingModal');
    const modalClose = document.querySelector('.modal-close');

    bookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalOverlay) {
                modalOverlay.classList.add('active');
            }
        });
    });

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // Dynamic Active Link Highlighting
    const currentLocation = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        const linkPath = item.getAttribute('href');
        if (linkPath === currentLocation || (currentLocation === '' && linkPath === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Handle form submission lightly
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(bookingForm);
            alert("Thank you! We have received your inquiry and will contact you shortly.");
            modalOverlay.classList.remove('active');
            bookingForm.reset();
        });
    }
});
