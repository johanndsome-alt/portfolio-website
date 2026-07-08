const toggle = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}else{
    toggle.textContent = "🌙";
}

toggle.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        toggle.textContent = "🌙";
        localStorage.setItem("theme","light");
    }

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});
