const startDate = new Date("February 1, 2022");

function updateCountdown(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
`❤️ Together for ${days} beautiful days ❤️`;

}

setInterval(updateCountdown,1000);

updateCountdown();

function openLetter(){

const letter = document.getElementById("loveLetter");

if(letter.style.display === "block"){
letter.style.display = "none";
}
else{
letter.style.display = "block";
}

}

document.getElementById("musicBtn")
.addEventListener("click",()=>{

const music = document.getElementById("music");

music.play();

});

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💙";

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize =
Math.random()*25 + 20 + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);