(()=>{
  const email='vasanth.katadi@gmail.com';
  const gmail='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(email);
  document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{
    a.href=gmail;
    a.target='_blank';
    a.rel='noopener noreferrer';
    if((a.textContent||'').includes('@')) a.textContent=email+' ↗';
    a.title='Compose email to '+email+' in Gmail';
  });
  document.querySelectorAll('body *').forEach(el=>{
    if(el.children.length===0&&el.textContent&&el.textContent.includes('vasanthkatadi225@gmail.com')){
      el.textContent=el.textContent.replaceAll('vasanthkatadi225@gmail.com',email);
    }
  });
})();