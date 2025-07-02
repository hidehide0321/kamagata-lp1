document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('お問い合わせありがとうございます！');
            contactForm.reset();
        });
    }

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburgerMenu.classList.toggle('open');
        });

        // メニュー項目クリックでメニューを閉じる
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                hamburgerMenu.classList.remove('open');
            });
        });
    }
});