const skill_95 = document.getElementById("skillbar__95");
const skill_90 = document.getElementById("skillbar__90");
const skill_75 = document.getElementById("skillbar__75");
const skill_50 = document.getElementById("skillbar__50");
const skill_45 = document.getElementById("skillbar__45");
const skill_30 = document.getElementById("skillbar__30");

let message = "Hey! I'm a web developer from Ukraine. I deeply interested in programming field and I constantly improve my professional level. Currently I work remotely, but I'm willing to work at the dinamic company for further improving my skills.";
let msgCount = 0;
let timer;
const messageLabel = document.getElementById("run");

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
    skill_95.classList.add("skillbar__95");
    skill_90.classList.add("skillbar__90");
    skill_75.classList.add("skillbar__75");
    skill_50.classList.add("skillbar__50");
    skill_45.classList.add("skillbar__45");
    skill_30.classList.add("skillbar__30");
  }
}