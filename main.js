
document.getElementById("toggle-services").addEventListener("click", function() {
    var services = document.getElementById("services");
    if (services.classList.contains("hidden")) {
      services.classList.remove("hidden");
    } else {
      services.classList.add("hidden");
    }
  });