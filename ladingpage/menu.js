let show = true;

const menuSection = document.querySelector(".content-header")
const menuToggle = menuSection.querySelector(".menu_toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})