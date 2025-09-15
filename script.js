document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("filterForm");
  const results = document.getElementById("results");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = document.getElementById("subject").value;
      const interest = document.getElementById("interest").value;

      results.innerHTML = `<p>Showing careers for ${subject} + ${interest}...</p>`;
      // You can expand this with real data or JSON later
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const email = document.getElementById("email").value;
      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        e.preventDefault();
      }
    });
  }
});
