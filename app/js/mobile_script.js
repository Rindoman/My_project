const skill_90 = document.getElementById("skillbar__90");
const skill_80 = document.getElementById("skillbar__80");
const skill_75 = document.getElementById("skillbar__75");
const skill_45 = document.getElementById("skillbar__45");
const skill_40 = document.getElementById("skillbar__40");
const skill_30 = document.getElementById("skillbar__30");

let message = "Hello! I'm a web developer from Ukraine. I really like to work in the field of programming, I constantly improve my professional level. Currently I work remotely, but I want to work in the company to further improve my skills.";
let msgCount = 0;
let timer;
let messageLabel = document.getElementById("run");

function textFunc() {
   messageLabel.innerHTML = message.substring(0, msgCount);   
   if (msgCount == message.length) {
      clearInterval(timer);            
   } else {
      msgCount++;
   }
}
timer = setInterval("textFunc()", 50);

window.onscroll = function() {nav()};

function nav() {
if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    skill_90.classList.add("skillbar__90");
    skill_80.classList.add("skillbar__80");
    skill_75.classList.add("skillbar__75");
    skill_45.classList.add("skillbar__45");
    skill_40.classList.add("skillbar__40");
    skill_30.classList.add("skillbar__30");
  }
}