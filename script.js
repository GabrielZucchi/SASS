window.addEventListener("scroll", function (){
    const scrolled = window.scrollY;
    const background = document.querySelector(".intro__background");
    background.style.backgroundPositionY = -(scrolled * 0.2) + "px"
});