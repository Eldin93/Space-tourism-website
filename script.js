function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let x = document.getElementById("myLinks");
x.style.display = "none";

let links = document.getElementById("myLinks").querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", hideLinks);
}

function toDestination() {
  window.location.href = "destination-moon.html";
}

function navigateToPage(url) {
  // Fade out the current page
  document.body.classList.add("page-transition");

  // Load the new page
  setTimeout(function () {
    window.location.href = url;
  }, 500);
}
