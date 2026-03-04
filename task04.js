// typing animation

const text = "Frontend Developer | Web Enthusiast";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// circle progress animation

document.querySelectorAll(".circle").forEach(circle => {

let percent = circle.getAttribute("data-percent");

let progress = circle.querySelector(".progress");

let offset = 314 - (314 * percent)/100;

progress.style.strokeDashoffset = offset;

});