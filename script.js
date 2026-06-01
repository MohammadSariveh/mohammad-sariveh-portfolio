
const t=document.getElementById('theme-toggle');
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark-mode');}
t.addEventListener('click',()=>{
document.body.classList.toggle('dark-mode');
localStorage.setItem('theme',document.body.classList.contains('dark-mode')?'dark':'light');
});
const b=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{b.style.display=window.scrollY>300?'block':'none';});
b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
