let text = document.getElementById('text');
let plant2 = document.getElementById('plant2');
let plant3 = document.getElementById('plant3');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let deer = document.getElementById('deer');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let cloud4 = document.getElementById('cloud4');
let bird = document.getElementById('bird');
let moon = document.getElementById('moon');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 3 + 'px';

  cloud1.style.left = value * 0.5 + 'px';
  cloud2.style.left = value * 0.5 + 'px';

  cloud3.style.top = value * -0.5 + 'px';
  cloud4.style.left = value * -0.5 + 'px';

  hill1.style.opacity = 1 - value * 0.003;
  hill2.style.opacity = 1 - value * 0.003;

  hill3.style.left = value * -1.5 + 'px';
  hill3.style.top = value * 0.5 + 'px';

  fog1.style.opacity = 1 - value * 0.005;

  moon.style.top = value * 1.5 + 'px';
  moon.style.opacity = 1 - value * 0.005;

  bird.style.left = value * -1.5 + 'px';
  bird.style.opacity = 1 - value * 0.005;

  plant3.style.top = value * 0.3 + 'px';
  plant2.style.top = value * 0.1 + 'px';
  plant1.style.top = value * 0.05 + 'px';
});
