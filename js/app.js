// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
    searchToggle.addEventListener("click", () => {
        searchBlock.classList.add("is-active");
    });

    searchCancel.addEventListener("click", () => {
        searchBlock.classList.remove("is-active");
    });
}



// const nuber1 = document.getElementById("comision");
// const nuber2 = document.getElementById("uslugi");
// nuber1.addEventListener('input', function(){
//     let value1 = parseFloat(nuber1.value);
//     console.log(value1);
// })
// nuber2.addEventListener('input', function(){
//     let value2 = parseFloat(nuber2.value);
//     console.log(value2);
// })

// function sum() {
//     let overal = nuber1 + nuber2;
//     document.getElementById("overal-sum").innerHTML = overal;
//     console.log(overal);
// }
function sum() {
    num1 = document.getElementById("comision")  ;
    num2 = document.getElementById("uslugi");
    num3 = document.getElementById("tarif");
    let number1 = parseInt(num1.value);
    let number2 = parseInt(num2.value );
    let number3 = parseInt(num3.value);
    document.getElementById("overal-sum").innerHTML =
        number1 + number2 + number3 + " Руб";

}
function sum2() {
    distance1 = document.getElementById("distance1");
    distance2 = document.getElementById("distance2");
    procent = document.getElementById("procent");
    let val1 = parseInt(distance1.value);
    let val2 = parseInt(distance2.value);
    let val3 = parseInt(procent.value);
    const over= document.getElementById("overal-sum2").innerHTML =val1 / val2 * 100 + ' Руб';
    console.log(over);
}
function sum3() {
    distance1 = document.getElementById("distance1");
    distance2 = document.getElementById("distance2");
    procent = document.getElementById("procent");
    let val1 = parseInt(distance1.value);
    let val2 = parseInt(distance2.value);
    let val3 = parseInt(procent.value);
    const over= document.getElementById("overal-sum3").innerHTML =val1 / val2 * 100 + ' Руб';
    console.log(over);
}
