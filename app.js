const hamburgerBtn = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
const reachOutBtn = document.querySelector("#reach-out");
const navLinks = navBar.querySelectorAll("a");

hamburgerBtn.addEventListener("click", toggleNav)

window.addEventListener("scroll", () => {
    if (screen.width >= 768) {
        reachOutBtn.classList.add("btn");
    } else if (screen.width) {
        reachOutBtn.classList.remove("btn");
    }
})

function toggleNav () {
    navBar.classList.toggle("nav--open");

    if (navBar.classList.contains("nav--open")) {
        navBar.addEventListener("click", (e) => {
            const clicked = e.target;

            navLinks.forEach(link => {
                if (clicked === link) {
                    navBar.classList.remove("nav--open")
                }
            })
        })        
    } 
}