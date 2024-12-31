document.addEventListener("DOMContentLoaded", () => {
  const keys = document.querySelectorAll(".key");

  keys.forEach((key, index) => {
    setTimeout(() => {
      key.classList.add("show-qr"); // Show QR code during animation
      key.style.animation = "hoverEffect 0.8s ease-in-out forwards";

      setTimeout(() => {
        key.classList.remove("show-qr"); // Remove QR code visibility after animation
        key.style.animation = ""; // Reset animation for normal hover behavior
      }, 1000); // Duration of hoverEffect animation
    }, index * 1000); // Delay between each key animation
  });
});
