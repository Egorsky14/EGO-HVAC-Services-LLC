function track(e,p){try{console.log('[track]',e,p||{});}catch(_){}}
const f=document.getElementById('leadForm');if(f){f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f).entries());track('Lead',d);alert('Thanks! We will call you shortly.');f.reset();});}
