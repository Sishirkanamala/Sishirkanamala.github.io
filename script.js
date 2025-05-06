

// Show the button once the user scrolls down 20px:
window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
// Scroll to top behavior
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}  

  