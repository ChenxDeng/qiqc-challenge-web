const menu=document.querySelector('#menu-toggle');
const nav=document.querySelector('#navigation');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.title=open?'Close navigation':'Open navigation';menu.querySelector('img').src=open?'assets/x.svg':'assets/menu.svg';nav.classList.toggle('open',open);}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus();}});
document.querySelector('#copy-code').addEventListener('click',async()=>{
 const status=document.querySelector('#copy-status');
 try{await navigator.clipboard.writeText(document.querySelector('#install-code').textContent);status.textContent='Commands copied.';}
 catch{status.textContent='Clipboard unavailable. Select the commands to copy them.';}
});
