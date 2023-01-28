const header = document.querySelector("header");

Window.addEventlistener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});