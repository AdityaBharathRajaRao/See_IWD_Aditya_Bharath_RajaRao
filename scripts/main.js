// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});
document.addEventListener("DOMContentLoaded", function () {
  const timelineCards = document.querySelectorAll(".timeline-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineCards.forEach((card) => {
    observer.observe(card);
  });
});
  document.getElementById("contactForm").addEventListener("Send", function(event){
    event.preventDefault();
    showAlert();
  });

  function showAlert() {
    alert("Thanks for showing interest");
  }
  // Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Validate the form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  let isValid = true;

  // Check if the name field is empty
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    nameInput.classList.remove('is-invalid');
  }

  // Check if the email field is empty or not a valid email address
  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  // Check if the message field is empty
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('is-invalid');
    isValid = false;
  } else {
    messageInput.classList.remove('is-invalid');
  }

  // If all fields are valid, submit the form
  if (isValid) {
    form.submit();
  }
});

// Function to validate email address using regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}