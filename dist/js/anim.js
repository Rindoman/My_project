const wrapper = document.querySelector(".main__left");
const text = document.querySelector(".run");
const navbar = document.getElementById("topNavBar");
const foto = document.querySelector(".main__right--img");
const skill_95 = document.getElementById("skillbar__95");
const skill_90 = document.getElementById("skillbar__90");
const skill_75 = document.getElementById("skillbar__75");
const skill_50 = document.getElementById("skillbar__50");
const skill_45 = document.getElementById("skillbar__45");
const skill_30 = document.getElementById("skillbar__30");

const textCont = text.textContent;
text.style.display = "none";
let i = 0;

window.onscroll = function() {nav()};

function nav() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.style.display = "block",
    navbar.style.position = 'fixed';
    navbar.style.animation = 'move-down .3s';
    navbar.style.animationFillMode = 'forwards';
    navbar.style.animationTimingFunction = 'ease-in';
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
      navbar.style.position = 'fixed';
      navbar.style.animation = 'move-up 1s';
      navbar.style.animationFillMode = 'forwards';
      navbar.style.animationTimingFunction = 'ease-out';
  } if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      skill_95.classList.add("skillbar__95");
      skill_90.classList.add("skillbar__90");
      skill_75.classList.add("skillbar__75");
      skill_50.classList.add("skillbar__50");
      skill_45.classList.add("skillbar__45");
      skill_30.classList.add("skillbar__30");
  }  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      foto.style.animation = 'my-move 2s';
      foto.style.display = 'block';
      while ( i < textCont.length) {
        (function(i) {
          setTimeout(function() {
            let waveText = document.createTextNode(textCont[i])
            let span = document.createElement('span');
            span.appendChild(waveText);
            span.classList.add("wave");
            wrapper.appendChild(span);
          }, 50 * i);
        }(i));
      i++;
    }
    clearTimeout();
  }
}