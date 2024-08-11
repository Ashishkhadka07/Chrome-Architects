document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function () {
        // Toggle Nav
        nav.classList.toggle('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// Add this to handle the burger animation
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .burger.toggle span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.toggle span:nth-child(2) {
        opacity: 0;
    }

    .burger.toggle span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

//Add this to handle slide animation
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
  
    function updateSlider() {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function showPrevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1; // Go to last slide
      }
      updateSlider();
    }
  
    function showNextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Go back to first slide
      }
      updateSlider();
    }
  
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
  
    // Optional: Auto-slide
    setInterval(showNextSlide, 5000);
  
    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
  
    // Initial update
    updateSlider();
  });