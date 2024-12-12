// document.addEventListener(".DOMContentLoaded", () => {
    
// })

const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const thirdSlade = document.querySelector(".third-slade");

const header = document.querySelector(".header");
const firstSlade = document.querySelector(".first-slade");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let firstSladeCenter = firstSlade.offsetHeight / 2;


    if (scrollTop >= firstSladeCenter) {
        header.classList.add("fixed");
        firstSlade.style.marginTop = `${header.offsetHeight}px`;
    } else {
        header.classList.remove("fixed");
        firstSlade.style.marginTop = "0px";
    }
})

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let thirdSladeCenter = thirdSlade.offsetTop / 3 + thirdSlade.offsetHeight / 3 ;

    if (scrollTop >= thirdSladeCenter) {
        lineOne.classList.add("animation-for-line-one");
        lineTwo.classList.add("animation-for-line-two");
    } else {
        lineOne.classList.remove("animation-for-line-one");
        lineTwo.classList.remove("animation-for-line-two");
    }
})