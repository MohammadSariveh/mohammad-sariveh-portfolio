
const t=document.getElementById('theme-toggle');
t.onclick=()=>document.body.classList.toggle('dark-mode');
const b=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{b.style.display=window.scrollY>300?'block':'none';});
b.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
