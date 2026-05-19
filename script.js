// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
});

// Add hovering class to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .product-card, .poster-frame');

interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
    });

    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple cart counter (for demo)
const cartBtn = document.querySelector('.nav-cart');
let cartCount = 0;

document.querySelectorAll('.product-overlay-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartBtn.textContent = `Keranjang (${cartCount})`;
    });
});
