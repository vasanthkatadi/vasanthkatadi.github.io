(()=>{
  const logo='ksvr-logo.png';
  const mark=document.querySelector('.brand .mark');
  if(mark){
    mark.textContent='';
    mark.style.width='44px';
    mark.style.height='44px';
    mark.style.padding='0';
    mark.style.overflow='hidden';
    mark.style.borderRadius='12px';
    mark.style.border='1px solid #2b3b50';
    mark.style.background='#071018';
    mark.style.boxShadow='0 0 22px rgba(55,230,210,.12)';
    const img=document.createElement('img');
    img.src=logo;
    img.alt='KSVR';
    img.width=44;
    img.height=44;
    img.style.display='block';
    img.style.width='100%';
    img.style.height='100%';
    img.style.objectFit='cover';
    mark.appendChild(img);
  }
  let icon=document.querySelector('link[rel="icon"]');
  if(!icon){icon=document.createElement('link');icon.rel='icon';document.head.appendChild(icon)}
  icon.type='image/png';
  icon.href=logo;
  let apple=document.querySelector('link[rel="apple-touch-icon"]');
  if(!apple){apple=document.createElement('link');apple.rel='apple-touch-icon';document.head.appendChild(apple)}
  apple.href=logo;
})();