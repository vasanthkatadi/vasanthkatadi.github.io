(()=>{
  const broader=[
    {kind:'science',label:'Scientific inverse problem',title:'Rolling-Shutter Multi-Camera Calibration',desc:'Jointly recover camera geometry and motion from temporally distorted multi-camera observations where timing and calibration errors interact.',stack:'computer vision · nonlinear optimisation · calibration'},
    {kind:'science',label:'Scientific inverse problem',title:'Earthquake Catalog Reconstruction',desc:'Rebuild coherent seismic events from noisy phase picks while respecting travel-time structure, association consistency and outliers.',stack:'geophysics · event association · robust inference'},
    {kind:'science',label:'Scientific inverse problem',title:'Atmospheric Profile Retrieval',desc:'Recover vertical atmospheric state from solar-occultation spectra under nonlinear forward modelling, coupling and regularisation.',stack:'remote sensing · inverse modelling · spectroscopy'},
    {kind:'science',label:'Scientific inverse problem',title:'Glacier Basal Drag Inversion',desc:'Infer spatial basal resistance from sparse surface-motion evidence in a physics-constrained inverse problem.',stack:'geophysics · PDE inversion · optimisation'},
    {kind:'science',label:'Signal processing',title:'Radio Interferometer Bandpass Calibration',desc:'Resolve wrapped phase, delay aliases and antenna-dependent complex gains across a noisy baseline graph.',stack:'radio astronomy · robust fitting · graph calibration'},
    {kind:'science',label:'Scientific inference',title:'Binary Orbit Recovery',desc:'Recover orbital parameters from mixed observations where geometry, periodicity and nonlinear parameter coupling create multiple plausible fits.',stack:'astronomy · nonlinear inference · model fitting'},
    {kind:'science',label:'Scientific inference',title:'Isotope Flux Recovery',desc:'Recover constrained fluxes from coupled balance relationships and isotopic observations while preserving physical feasibility.',stack:'scientific computing · constrained inference'},
    {kind:'science',label:'Crystallography',title:'Crystal Indexing & Strain Recovery',desc:'Infer crystal orientation, strain, peak indexing and outliers from diffraction observations with uncertainty-weighted residuals.',stack:'physics · crystallography · robust inverse problem'},
    {kind:'systems',label:'Language tooling',title:'Go Generic Type Resolution Engine',desc:'Repair deep generic type-resolution behaviour where aliases, constraints, inference and semantic identity interact across the type checker.',stack:'Go · compilers · type systems'},
    {kind:'systems',label:'Runtime systems',title:'WebAssembly Core Runtime',desc:'Implement and repair low-level WebAssembly execution semantics across validation, memory, control flow and numeric behaviour.',stack:'C++ · WebAssembly · runtime semantics'},
    {kind:'systems',label:'Systems programming',title:'Cross-Format Archive Engine',desc:'Handle TAR, PAX, CPIO, ZIP/Zip64, ar and gzip with safe extraction, filtering and deterministic transcoding.',stack:'archives · parsers · systems security'},
    {kind:'systems',label:'Build systems',title:'Build Planner Performance',desc:'Preserve build-graph correctness while repairing planning behaviour and scaling characteristics in a dependency-heavy Go codebase.',stack:'Go · build graphs · performance'},
    {kind:'systems',label:'Fuzzing & parsing',title:'Logistics Bundle Parser Fuzzing',desc:'Exercise a C++ logistics archive and manifest toolkit with connected fuzz harnesses designed to expose parser crashes and state inconsistencies.',stack:'C++17 · fuzzing · parsers'},
    {kind:'systems',label:'Security protocol',title:'NSEC3 Denial-Proof Validator',desc:'Validate DNSSEC denial proofs across iterative hashing, circular intervals, closest-encloser logic, wildcard denial and Opt-Out edge cases.',stack:'DNSSEC · Python · protocol verification'},
    {kind:'engineering',label:'Engineering diagnosis',title:'Stator Hotspot Root-Cause Diagnosis',desc:'Distinguish interacting electrical and cooling defects using calibrated evidence, competing hypotheses and intervention results.',stack:'power engineering · causal reasoning · validation'},
    {kind:'engineering',label:'Engineering remediation',title:'Marine Insulator Pollution Remediation',desc:'Reconstruct contamination severity, compare mitigation packages under uncertainty and select temporary and permanent remediation paths.',stack:'high voltage · uncertainty · decision making'},
    {kind:'engineering',label:'Structural assessment',title:'Bridge Tendon Assessment',desc:'Synthesize inspection and engineering evidence to discriminate damage mechanisms and define defensible remediation and release criteria.',stack:'civil engineering · evidence synthesis'},
    {kind:'engineering',label:'Composite diagnosis',title:'Composite Blade Disbond Diagnosis',desc:'Combine multiple evidence sources to separate competing defect mechanisms and test whether interventions explain the observations.',stack:'composites · model discrimination'},
    {kind:'engineering',label:'Robust control',title:'Industrial Servo-Axis Tuning',desc:'Identify plant behaviour, screen controller and hardware combinations, run nonlinear simulations and rank designs across robust operating cases.',stack:'controls · identification · nonlinear simulation'},
    {kind:'engineering',label:'Thermal design',title:'Battery Module Thermal Management',desc:'Calibrate sensors, identify thermal parameters and compare control designs under nonlinear saturation, slew and robustness constraints.',stack:'thermal systems · control · robust design'}
  ];

  const style=document.createElement('style');
  style.textContent=`
  .experience{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(180deg,rgba(13,17,25,.72),rgba(8,11,16,.25))}
  .experience-top{display:flex;align-items:end;justify-content:space-between;gap:36px;margin-bottom:34px}.experience-top .heading{margin:0}
  .filters{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.filter{border:1px solid #2a384c;background:#0b1119;color:#8e9db1;border-radius:999px;padding:8px 12px;font-size:11px;cursor:pointer}.filter.active,.filter:hover{border-color:#72d9ac;color:#dfffee;background:#0e1a16}
  .experience-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.exp-card{border:1px solid var(--line);border-radius:17px;padding:22px;background:linear-gradient(180deg,#101620,#0b1017);min-height:215px;transition:.2s}.exp-card:hover{border-color:#36485f;transform:translateY(-2px)}.exp-card.hidden{display:none}.exp-card .kind{font:10px monospace;color:var(--accent);text-transform:uppercase;letter-spacing:.1em}.exp-card h3{font-size:17px;line-height:1.25;margin:29px 0 10px}.exp-card p{font-size:12px;color:#8291a5;margin:0}.exp-card .stack{font:10px monospace;color:#64748b;margin-top:18px}.experience-note{margin-top:24px;color:#68788e;font-size:11px}
  @media(max-width:1000px){.experience-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:900px){.experience-top{display:block}.filters{justify-content:flex-start;margin-top:22px}.experience-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.experience-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const nav=document.querySelector('.nav');
  if(nav&&!nav.querySelector('a[href="#experience"]')){
    const a=document.createElement('a'); a.href='#experience'; a.textContent='Experience';
    const lab=nav.querySelector('a[href="#lab"]'); nav.insertBefore(a,lab||null);
  }

  const proof=document.querySelectorAll('.proof div');
  if(proof[0]){proof[0].querySelector('strong').textContent='30';proof[0].querySelector('span').textContent='selected evaluation systems'}
  if(proof[2]){proof[2].querySelector('strong').textContent='10+';proof[2].querySelector('span').textContent='technical domains'}

  const lab=document.getElementById('lab');
  if(lab&&!document.getElementById('experience')){
    const section=document.createElement('section');
    section.id='experience'; section.className='experience section';
    section.innerHTML=`<div class="shell"><div class="experience-top"><div class="heading"><p class="eyebrow">Broader evaluation experience</p><h2>From scientific inverse problems to runtimes, control systems and evidence-based engineering.</h2><p>Selected sanitised task families from a wider body of frontier-agent evaluation work. The cards describe capability surfaces, not private benchmark material.</p></div><div class="filters"><button class="filter active" data-filter="all">All</button><button class="filter" data-filter="science">Scientific</button><button class="filter" data-filter="systems">Systems</button><button class="filter" data-filter="engineering">Engineering</button></div></div><div class="experience-grid"></div><p class="experience-note mono">Public-safe summaries only · hidden datasets, reference solutions, graders and internal review material are intentionally omitted.</p></div>`;
    lab.parentNode.insertBefore(section,lab);
    const grid=section.querySelector('.experience-grid');
    broader.forEach(x=>{const e=document.createElement('article');e.className='exp-card';e.dataset.kind=x.kind;e.innerHTML=`<span class="kind">${x.label}</span><h3>${x.title}</h3><p>${x.desc}</p><div class="stack">${x.stack}</div>`;grid.appendChild(e)});
    section.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{section.querySelectorAll('.filter').forEach(q=>q.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;section.querySelectorAll('.exp-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.kind!==f))}));
  }

  const about=document.querySelector('#about .about > div:last-child');
  if(about){
    const ps=about.querySelectorAll('p');
    if(ps[1]) ps[1].textContent='My task-authoring experience spans systems programming, ML evaluation, compilers, numerical inverse problems, robotics calibration, signal processing, controls, power engineering, security protocols, fuzzing and evidence-based STEM reasoning.';
    if(ps[2]) ps[2].textContent='I enjoy problems where correctness is not visible from one output: state has to survive replay, numerical methods have to stay stable, compilers have to preserve meaning and scientific conclusions have to survive uncertainty and competing hypotheses.';
  }
})();