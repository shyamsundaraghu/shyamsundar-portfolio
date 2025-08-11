document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu for Mobile ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Typing Effect ---
    new Typed('#typing-effect', {
        strings: ['Electronics Engineer.', 'Researcher.', 'Innovator.', 'Antenna Designer.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });

    // --- Project Modals ---
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // --- Add fade-in animation on scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Optional: remove class if you want animation to repeat
                // entry.target.classList.remove('show'); 
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.content-section > .container');
    hiddenElements.forEach((el) => observer.observe(el));

    // Add this CSS to style.css for the scroll animation
    /*
    .content-section > .container {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .content-section > .container.show {
        opacity: 1;
        transform: translateY(0);
    }
    */
   // To make this work, add the above CSS to your style.css file
   const style = document.createElement('style');
   style.innerHTML = `
    .content-section > .container {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out;
    }
    .content-section > .container.show {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
   `;
   document.head.appendChild(style);


});