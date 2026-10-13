(function(){var h=document.documentElement,k='cb-lang';
function set(l){h.dataset.lang=l;h.lang=l;try{localStorage.setItem(k,l)}catch(e){}}
try{var s=localStorage.getItem(k);if(s)set(s)}catch(e){}
document.getElementById('lang').onclick=function(){set(h.dataset.lang==='en'?'es':'en')};
var lb=document.getElementById('lb'),im=lb.querySelector('img'),p=lb.querySelector('p');
document.querySelectorAll('.gal figure').forEach(function(f){f.tabIndex=0;function o(){im.src=f.dataset.full;im.alt=f.querySelector('img').alt;p.textContent=f.querySelector('figcaption').innerText;lb.classList.add('on')}
f.onclick=o;f.onkeydown=function(e){if(e.key==='Enter')o()}});
function c(){lb.classList.remove('on')}lb.onclick=function(e){if(e.target!==im)c()};document.onkeydown=function(e){if(e.key==='Escape')c()};})();
