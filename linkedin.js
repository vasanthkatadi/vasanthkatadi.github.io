(()=>{
  const url='https://www.linkedin.com/in/vasanthkatadi';
  const label='LinkedIn ↗';

  const addLink=(parent, className='')=>{
    if(!parent || parent.querySelector('a[href*="linkedin.com/in/vasanthkatadi"]')) return;
    const a=document.createElement('a');
    a.href=url;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.textContent=label;
    if(className) a.className=className;
    parent.appendChild(a);
  };

  addLink(document.querySelector('#about .links'));
  addLink(document.querySelector('.hero .meta'));
})();