// script.js — safe, robust redirect handlers
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Form handler (any .form element)
    document.querySelectorAll(".form").forEach(form => {
      // ensure it's a form element or behaves like one
      if (form.tagName.toLowerCase() === "form") {
        form.addEventListener("submit", e => {
          e.preventDefault();
          console.log("Form .form submitted -> redirecting to index.html");
          window.location.href = "index.html";
        });
      } else {
        // if it's not a <form> but you want same behavior on a click
        form.addEventListener("click", e => {
          e.preventDefault();
          console.log(".form clicked -> redirecting to index.html");
          window.location.href = "index.html";
        });
      }
    });

    // Button1 handler (supports multiple .button1)
    document.querySelectorAll(".button1").forEach(btn => {
      // If button is inside a form and is type="submit", clicking will submit the form.
      // We handle click to be safe.
      btn.addEventListener("click", e => {
        e.preventDefault();
        console.log(".button1 clicked -> redirecting to minigames.html");
        window.location.href = "minigames.html";
      });
    });

    // About us button by id
    const abtus = document.getElementById("abtus");
    if (abtus) {
      abtus.addEventListener("click", e => {
        e.preventDefault();
        console.log("#abtus clicked -> redirecting to about.html");
        window.location.href = "about.html";
      });
    } else {
      console.log("No element found with id #abtus on this page.");
    }
  } catch (err) {
    console.error("script.js error:", err);
  }
});
