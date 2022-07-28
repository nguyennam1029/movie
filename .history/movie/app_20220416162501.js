$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
})

// -------tab---
const tabList= document.querySelectorAll(".tab-item");
const tabConten= document.querySelectorAll(".showtime-list");
[...tabList].forEach((item)=>item.addEventListener("click",handelTabClick));
function handelTabClick(event) {
    // forEach()
    // event.target.classList.remove("is-active")
    [...tabList].forEach((item)=> item.classList.remove("is-active"));
    // console.log(event.target)
    event.target.classList.add("is-active");
    const numberData= parseInt(event.target.dataset.tab);
    // console.log(numberData)
    [...tabConten].forEach((item)=>item.classList.remove("show-active"));
    [...tabConten][numberData-1].classList.add("show-active")
}