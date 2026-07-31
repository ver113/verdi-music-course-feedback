// ============================
// Verdi Music Course
// script.js
// ============================

// STAR RATING

const stars = document.querySelectorAll(".star");

let rating = 0;

const notes = [
261.63,
293.66,
329.63,
392.00,
523.25
];

// Piano Sound
function playNote(freq){

const ctx = new (window.AudioContext || window.webkitAudioContext)();

const osc = ctx.createOscillator();

const gain = ctx.createGain();

osc.type = "sine";

osc.frequency.value = freq;

osc.connect(gain);

gain.connect(ctx.destination);

gain.gain.setValueAtTime(0.2,ctx.currentTime);

gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.8);

osc.start();

osc.stop(ctx.currentTime+0.8);

}

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

rating=index+1;

stars.forEach((s,i)=>{

if(i<=index){

s.classList.add("active");

}else{

s.classList.remove("active");

}

});

playNote(notes[index]);

});

});

// FORM

const form=document.getElementById("feedbackForm");

form.addEventListener("submit",function(e){

e.preventDefault();

if(rating===0){

alert("Please choose a star rating ⭐");

return;

}

const name=form.querySelector("input").value;

confetti({

particleCount:200,

spread:90,

origin:{y:0.6}

});

setTimeout(()=>{

alert(

`🎉 Thank you ${name}!\n\nYour feedback means a lot to Verdi Music Course ❤️`

);

form.reset();

stars.forEach(s=>s.classList.remove("active"));

rating=0;

},500);

});

// Smooth Reveal

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

observer.observe(card);

});

// HERO BUTTON EFFECT

const hero=document.querySelector(".hero-button");

hero.addEventListener("mouseenter",()=>{

hero.style.transform="scale(1.08)";

});

hero.addEventListener("mouseleave",()=>{

hero.style.transform="scale(1)";

});
