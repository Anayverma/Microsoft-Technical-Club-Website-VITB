document.addEventListener("DOMContentLoaded", function() {
    // Hide preloader after 5 seconds with fade and zoom effect
    setTimeout(function() {
      var preloader = document.getElementById("preloader");
      var preloaderImg = document.querySelector("#preloader img");
  
      preloader.style.opacity = "0";
      preloaderImg.style.transform = "scale(1.9)";
  
      setTimeout(function() {
        preloader.style.display = "none";
        document.getElementById("content").classList.remove("hidden");
      }, 2000); // Wait for the transition to complete
    }, 500);
});
