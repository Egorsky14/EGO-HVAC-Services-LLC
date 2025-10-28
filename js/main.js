// Simple event hooks (replace with GTM/Pixel as needed)
function track(eventName, payload){
  console.log('[track]', eventName, payload || {});
  // dataLayer && dataLayer.push({event: eventName, ...payload});
  // fbq && fbq('trackCustom', eventName, payload);
}

// Contact form handler (basic demo)
const lf = document.getElementById('leadForm');
if(lf){
  lf.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(lf).entries());
    track('Lead', { source: 'Contact', ...data });
    alert('Thanks! We will call you shortly to confirm details.');
    lf.reset();
  });
}