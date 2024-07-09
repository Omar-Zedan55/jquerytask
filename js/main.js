$(".singer").click(function () {

    $(this).next().slideToggle();
    $(this).next().siblings().filter('.singerdata').slideUp();
})
let navlength = $(".leftbar").outerWidth();
console.log(navlength)

$(".leftbar").css("left", -navlength)

$(".open").click(function () {
    $(".leftbar").animate({ left: "0" }, 500)
    $(".header-welcome").animate({ marginLeft: '250px' }, 500)
})

$(".fa-x").click(function () {
    $(".leftbar").animate({ left: "-250px" }, 500)
    $(".header-welcome").animate({ marginLeft: '0' }, 500)
})

let countlength = new Date("Jan 1, 2025 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countlength - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".days").text(`- ${days} D`)
    $(".hours").text(`${hours} H`)
    $(".mins").text(`${minutes} M`)
    $(".seconds").text(`${seconds} S`)
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
let rest;
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
    rest = 100 - textarea.value.length;
    console.log(rest);
    if (rest > 0) {
        $(".restletters").text(rest)
    } else {

        $(".restletters").text("your available character finished")

    }
})
