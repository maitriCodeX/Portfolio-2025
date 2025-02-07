let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');

setInterval(() => {
  images[currentIndex].classList.remove('active'); // Hide current image
  currentIndex = (currentIndex + 1) % images.length; // Move to next image
  images[currentIndex].classList.add('active'); // Show next image
}, 2000); // 1-second interval



// skills

const buttons = document.querySelectorAll('.skill-btn, .tool-btn');
const funfactBox = document.getElementById('funfact-box');
const funfactText = document.getElementById('funfact-text');

const funFacts = {
  html: "HTML is the standard markup language for creating web pages.",
  css: "CSS is used to style and layout web pages, including colors, fonts, and spacing.",
  js: "JavaScript enables dynamic content and interactivity on web pages.",
  git: "Git is a version control system that tracks changes in code.",
  github: "GitHub is a platform for hosting and sharing code with version control.",
  figma: "Figma is a collaborative interface design tool used for prototyping and UI/UX design.",
  blender: "Blender is an open-source 3D modeling software used for creating animations and models."
};

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const buttonId = button.id.split('-')[0];
    funfactText.textContent = funFacts[buttonId];
    funfactBox.classList.add('show');
  });

  button.addEventListener('mouseleave', () => {
    funfactText.textContent = 'Hover over a button to see a fun fact!'; 
    funfactBox.classList.remove('show');
  });
});



// contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name && email && phone && subject && message) {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('response-message').style.display = 'block';
  } else {
    alert('Please fill in all fields.');
  }
});



// icons

document.addEventListener('scroll', function() {
  const contactSection = document.getElementById('contact');
  const headerIcons = document.querySelector('.social-icons');

  // Get the position of the Contact section relative to the viewport
  const rect = contactSection.getBoundingClientRect();

  // Check if the Contact section is in the viewport
  const isContactInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

  // Toggle the visibility of the icons based on whether the Contact section is in view
  if (isContactInView) {
    headerIcons.style.display = 'block'; // Show the icons
  } else {
    // headerIcons.style.display = 'none'; // Hide the icons
  }
});

// Social-icons
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelector(".social-icons"); // Navbar icons
  const contactSection = document.getElementById("contact"); // Contact section

  if (socialIcons && contactSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            socialIcons.style.opacity = "1"; // Show icons
            socialIcons.style.transform = "translateY(0)";
          } else {
            socialIcons.style.opacity = "0"; // Hide icons
            socialIcons.style.transform = "translateY(-10px)"; // Smooth fade out
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 20% of the contact section is visible
    );

    observer.observe(contactSection);
  }
});
