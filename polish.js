(()=>{
  const style=document.createElement('style');
  style.textContent=`
  :root{--accent:#8ff7c8;--cyan:#8edfff;--panel:#0e151f;--line:#202c3b;--muted:#98a8bb}
  body{background:
    radial-gradient(circle at 72% 7%,rgba(70,210,190,.075),transparent 26%),
    radial-gradient(circle at 15% 22%,rgba(95,160,255,.045),transparent 24%),
    #080b10;letter-spacing:-.005em}
  .shell{width:min(1160px,calc(100% - 48px))}
  .header{height:70px;background:rgba(8,11,16,.84);border-bottom:1px solid rgba(150,175,205,.09);box-shadow:0 8px 30px rgba(0,0,0,.16)}
  .header .shell{gap:20px}.brand{gap:12px;font-size:14px}.brand .mark{width:38px!important;height:38px!important;border-radius:11px!important;box-shadow:0 0 26px rgba(100,240,205,.13)!important}.brand .mark img{width:100%!important;height:100%!important}
  .nav{gap:6px;padding:5px;border:1px solid rgba(130,155,185,.12);background:rgba(14,20,29,.68);border-radius:999px}.nav a{padding:8px 12px;border-radius:999px;font-size:12px;transition:.2s}.nav a:hover{color:#fff;background:rgba(143,247,200,.08)}
  .contact{padding:10px 16px;border-color:#35536a;background:linear-gradient(180deg,#111b26,#0c131c);transition:.2s}.contact:hover{border-color:#74dcb2;color:var(--accent);box-shadow:0 0 24px rgba(90,220,180,.08)}

  .hero{position:relative;min-height:650px;grid-template-columns:1.06fr .94fr;gap:58px;padding:86px 0 66px}.hero:before{content:"";position:absolute;left:-90px;top:70px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(143,247,200,.055),transparent 66%);pointer-events:none}.hero>div:first-child{position:relative;z-index:1}
  .eyebrow{font-size:10px;letter-spacing:.17em}.hero h1{font-size:clamp(44px,5.1vw,68px);line-height:1.035;max-width:760px;margin:17px 0 21px}.hero h1 em{background:linear-gradient(90deg,var(--accent),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent}.lede{font-size:17px;line-height:1.75;max-width:690px;color:#a8b5c6}
  .hero-highlights{display:flex;gap:8px;flex-wrap:wrap;margin:24px 0 2px}.hero-highlights span{font:10px "SFMono-Regular",Consolas,monospace;padding:7px 10px;border:1px solid #26384b;border-radius:999px;color:#a9b9ca;background:rgba(13,20,29,.72)}.hero-highlights span:before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--accent);margin-right:7px;vertical-align:1px;box-shadow:0 0 9px rgba(143,247,200,.5)}
  .actions{margin:28px 0 25px}.btn{padding:12px 16px;border-radius:11px}.btn.primary{background:linear-gradient(135deg,#9cf7ca,#7fe1c0);box-shadow:0 10px 30px rgba(110,240,195,.10)}
  .meta{margin-top:26px;font-size:10.5px;gap:10px}.meta>*{border-left:1px solid #273345;padding-left:10px}.meta>*:first-child{border-left:0;padding-left:0}
  .terminal{border-color:#26364a;border-radius:18px;box-shadow:0 32px 90px rgba(0,0,0,.30),0 0 0 1px rgba(143,247,200,.025)}.tbody{padding:22px;font-size:11.5px}.score strong{font-size:23px}.tbar{height:42px}

  .proof{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;border:0;margin:18px auto 105px}.proof div{position:relative;border:1px solid var(--line);border-radius:15px;padding:22px 20px;background:linear-gradient(180deg,rgba(17,24,35,.94),rgba(11,16,24,.9));overflow:hidden}.proof div:before{content:"";position:absolute;left:0;top:0;width:100%;height:2px;background:linear-gradient(90deg,var(--accent),transparent)}.proof strong{font-size:25px}.proof span{font-size:10.5px;line-height:1.45;display:block;margin-top:4px}

  .section{padding:82px 0}.heading{max-width:800px;margin-bottom:38px}.heading h2{font-size:clamp(32px,3.7vw,48px);line-height:1.1;margin:9px 0 14px}.heading p{font-size:14px;line-height:1.75}.heading:after{content:"";display:block;width:72px;height:2px;margin-top:20px;background:linear-gradient(90deg,var(--accent),transparent)}
  .grid{gap:14px}.card{min-height:270px;border-radius:17px;padding:26px;background:linear-gradient(180deg,#101722,#0c121a);overflow:hidden}.card:before{content:"";position:absolute;left:0;top:0;width:100%;height:2px;background:linear-gradient(90deg,rgba(143,247,200,.75),rgba(142,223,255,.18),transparent)}.card:hover{transform:translateY(-2px);border-color:#365069;box-shadow:0 20px 45px rgba(0,0,0,.16)}.card h3{font-size:23px;margin:35px 0 12px}.card p{font-size:13px;line-height:1.7}.tags{margin-top:18px}.tags span{font-size:9px;padding:5px 8px;background:#0b1118}.arrow{font-size:17px}
  .extra-head{margin:76px 0 24px}.extra-head h3{font-size:27px}.extra-head>p{font-size:13px}.extras{gap:10px}.mini{min-height:145px;padding:18px;border-radius:14px}.mini .num{margin-bottom:25px}.mini h4{font-size:14px}.mini p{line-height:1.55}

  .programs{border-top:1px solid rgba(140,165,195,.09)!important;background:linear-gradient(180deg,rgba(11,16,24,.55),rgba(8,11,16,.15))!important}.project-process{gap:10px!important;margin:30px 0 32px!important}.project-process div{position:relative;padding:16px!important;border-radius:14px!important;background:linear-gradient(180deg,#0f1721,#0a1017)!important;overflow:hidden}.project-process div:before{content:"";position:absolute;left:0;top:0;width:44%;height:1px;background:var(--accent)}.project-process b{font-size:12px!important;margin-top:10px!important}.project-process small{font-size:9.5px!important;line-height:1.5!important}
  .program-grid{gap:12px!important}.program{padding:24px!important;border-radius:17px!important;background:linear-gradient(180deg,#0f1721,#0b1017)!important;transition:.2s}.program:hover{border-color:#32485e!important;transform:translateY(-1px)}.program h3{font-size:21px!important;margin:5px 0 9px!important}.program .summary{font-size:12.5px!important;line-height:1.7}.program .examples{margin-top:17px!important;padding-top:14px!important;line-height:1.6!important}.program details{margin-top:17px;border-top:1px solid #202b39;padding-top:13px}.program details summary{cursor:pointer;list-style:none;font:10px "SFMono-Regular",Consolas,monospace;color:var(--accent);text-transform:uppercase;letter-spacing:.08em}.program details summary::-webkit-details-marker{display:none}.program details summary:after{content:" +";color:#6f839a}.program details[open] summary:after{content:" −"}.program details ol{margin-top:12px!important}.program details li{font-size:11.5px!important;line-height:1.55;margin:6px 0!important}.program>h4,.program>ol{display:none!important}

  .experience{background:linear-gradient(180deg,rgba(10,15,22,.55),rgba(8,11,16,.22))!important}.experience-top{align-items:flex-start!important}.filters{padding-top:6px}.filter{padding:7px 11px!important}.experience-grid{gap:10px!important}.exp-card{min-height:190px!important;padding:19px!important;border-radius:15px!important;background:linear-gradient(180deg,#0f1620,#0a1017)!important}.exp-card h3{font-size:15.5px!important;margin:22px 0 9px!important}.exp-card p{font-size:11.5px!important;line-height:1.6}.exp-card .stack{font-size:9.5px!important;line-height:1.45}.exp-card.polish-collapsed{display:none!important}.exp-toggle-wrap{text-align:center;margin-top:24px}.exp-toggle{border:1px solid #2b4154;border-radius:999px;background:#0d151e;color:#c6d2de;padding:10px 15px;font-size:11px;cursor:pointer}.exp-toggle:hover{border-color:#6ed9b1;color:var(--accent)}

  .lab{background:linear-gradient(180deg,#0a0f16,#090d13)!important}.labgrid{gap:48px}.lab h2{font-size:39px}.choice{border-radius:10px;padding:12px 13px}.console{border-radius:17px}.cout{min-height:315px;padding:20px}
  .method{gap:10px}.step{min-height:185px;padding:23px;border-radius:15px;background:linear-gradient(180deg,#0f151e,#0a1017)}.step h3{font-size:19px;margin:28px 0 8px}.step p{font-size:12px;line-height:1.65}
  .principles{gap:55px}.principles h2{font-size:38px}.plist article{padding:20px 0}.plist p{font-size:12px;line-height:1.65}
  .about{padding:38px;border-radius:20px;gap:46px;background:linear-gradient(135deg,#101823,#0c1219);box-shadow:0 26px 70px rgba(0,0,0,.16)}.about h2{font-size:31px}.about p{font-size:13px;line-height:1.75}.portrait-wrap{max-width:335px;border-radius:19px;padding:8px}.portrait{border-radius:13px}.links{margin-top:21px;font-size:10.5px}
  .footer{padding-top:30px}

  .reveal{opacity:0;transform:translateY(12px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:none}
  ::selection{background:rgba(143,247,200,.23);color:#fff}
  @media(max-width:1000px){.nav{gap:2px}.nav a{padding:7px 9px}.hero{gap:38px}.proof{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:900px){.shell{width:min(100% - 32px,1160px)}.hero{grid-template-columns:1fr;min-height:auto;padding:68px 0 52px}.terminal{max-width:680px}.proof{margin-bottom:70px}.section{padding:68px 0}.about{padding:30px}}
  @media(max-width:560px){.hero h1{font-size:43px}.hero-highlights{gap:6px}.proof{grid-template-columns:1fr 1fr;gap:8px}.proof div{padding:17px 13px}.proof strong{font-size:21px}.section{padding:58px 0}.about{padding:23px}.heading h2{font-size:33px}}
  `;
  document.head.appendChild(style);

  const lede=document.querySelector('.hero .lede');
  if(lede&&!document.querySelector('.hero-highlights')){
    const highlights=document.createElement('div');
    highlights.className='hero-highlights';
    ['Long-horizon agent evaluation','Independent verification','Scientific + systems benchmarks'].forEach(t=>{const s=document.createElement('span');s.textContent=t;highlights.appendChild(s)});
    lede.insertAdjacentElement('afterend',highlights);
  }

  document.querySelectorAll('.program').forEach(card=>{
    const h4=card.querySelector(':scope > h4');
    const ol=card.querySelector(':scope > ol');
    if(h4&&ol&&!card.querySelector('details')){
      const details=document.createElement('details');
      const summary=document.createElement('summary');
      summary.textContent='How I worked on this project';
      details.appendChild(summary);
      details.appendChild(ol.cloneNode(true));
      const examples=card.querySelector('.examples');
      card.insertBefore(details,examples||null);
    }
  });

  function setupExperienceCollapse(){
    const grid=document.querySelector('#experience .experience-grid');
    if(!grid||grid.dataset.polished==='1') return;
    grid.dataset.polished='1';
    const cards=[...grid.querySelectorAll('.exp-card')];
    if(cards.length<=8) return;
    cards.slice(8).forEach(c=>c.classList.add('polish-collapsed'));
    const wrap=document.createElement('div');wrap.className='exp-toggle-wrap';
    const btn=document.createElement('button');btn.className='exp-toggle';btn.type='button';btn.textContent=`Show all ${cards.length} task families`;
    let open=false;
    btn.addEventListener('click',()=>{open=!open;cards.slice(8).forEach(c=>c.classList.toggle('polish-collapsed',!open));btn.textContent=open?'Show selected task families':`Show all ${cards.length} task families`});
    wrap.appendChild(btn);grid.insertAdjacentElement('afterend',wrap);
    document.querySelectorAll('#experience .filter').forEach(f=>f.addEventListener('click',()=>{if(f.dataset.filter&&f.dataset.filter!=='all'){cards.forEach(c=>c.classList.remove('polish-collapsed'));wrap.style.display='none'}else{wrap.style.display='block';cards.slice(8).forEach(c=>c.classList.toggle('polish-collapsed',!open))}}));
  }
  setupExperienceCollapse();
  setTimeout(setupExperienceCollapse,120);

  const revealTargets=document.querySelectorAll('.card,.program,.exp-card,.step,.about,.proof div');
  revealTargets.forEach(el=>el.classList.add('reveal'));
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -25px'});
    revealTargets.forEach(el=>io.observe(el));
  }else revealTargets.forEach(el=>el.classList.add('visible'));
})();