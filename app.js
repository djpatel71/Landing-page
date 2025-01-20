const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const featuresMenu = document.querySelector("#features-page");
  const contactMenu = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  // Adds 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    featuresMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    featuresMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 1400) {
    contactMenu.classList.add("highlight");
    featuresMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// ================================
// FORM VALIDATION SCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission until validation is complete
    let errors = [];

    // Name validation
    if (nameInput.value.trim() === "") {
      errors.push("Name is required.");
    }

    // Email validation
    if (emailInput.value.trim() === "") {
      errors.push("Email is required.");
    } else if (!validateEmail(emailInput.value.trim())) {
      errors.push("Invalid email format.");
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      errors.push("Message is required.");
    }

    // Display errors or success message
    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join("<br>");
      errorMessage.style.color = "red";

      // Print errors in console
      console.error("Form Validation Errors:", errors);
    } else {
      errorMessage.innerHTML = "Message sent successfully!";
      errorMessage.style.color = "green";

      console.log("Form submitted successfully!");
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Message:", messageInput.value);

      // Reset form fields after success
      form.reset();
    }
  });

  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});