import React,{useState} from 'react';import{createRoot}from'react-dom/client';import './v47.css';
const stages=[{label:'SOURCE',title:'Evidence, not guesswork.',desc:'Review project references in context: drawing revisions, model information, brief requirements and the conversations behind them.',status:'4 LINKED SOURCES',detail:'Drawing A-104 · Revision C',note:'Source and model disagree on partition location'},{label:'ISSUE',title:'The discrepancy is visible.',desc:'A proposed issue shows the affected area, supporting evidence and what still needs human verification.',status:'1 NEEDS REVIEW',detail:'Partition alignment · Zone 02',note:'Difference detected between the architectural plan and model reference'},{label:'DECISION',title:'The architect stays in control.',desc:'Approve, reject or request clarification. Changes remain proposed until a qualified team member makes the decision.',status:'AWAITING APPROVAL',detail:'Proposal PR-014 · Zone 02',note:'No automatic model write is performed in this preview'}];
function BuildingModel(){return <svg className="bimModel" viewBox="0 0 1100 760" role="img" aria-label="Isometric architectural apartment model with rooms, partitions and furniture" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="tiles" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M35 0H0V35" fill="none" stroke="#a8b5a9" strokeWidth=".6"/></pattern><pattern id="wood" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 5H30M0 19H30" stroke="#c1a990" strokeWidth=".8"/></pattern><linearGradient id="wall" x1="0" x2="1"><stop stopColor="#f5f5ec"/><stop offset="1" stopColor="#c9d4cb"/></linearGradient><filter id="modelShadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="17"/></filter></defs><ellipse cx="560" cy="638" rx="420" ry="84" fill="#324638" opacity=".16" filter="url(#modelShadow)"/><g strokeLinejoin="round"><path d="M100 355L495 143L1004 386L606 620Z" fill="#677a70" stroke="#40574a" strokeWidth="5"/><path d="M100 336L495 124L1004 367L606 601Z" fill="#e9e8db" stroke="#3d5146" strokeWidth="5"/><path d="M100 336L495 124L1004 367L606 601Z" fill="url(#wood)" opacity=".7"/><path d="M100 336L495 124L1004 367L606 601Z" fill="none" stroke="#455a4d" strokeWidth="5"/><path d="M100 336V266L495 55V124Z" fill="url(#wall)" stroke="#55685b" strokeWidth="4"/><path d="M495 55L1004 298V367L495 124Z" fill="#d8e1d8" stroke="#55685b" strokeWidth="4"/><path d="M100 266L495 55L1004 298" fill="none" stroke="#53685a" strokeWidth="5"/><path d="M315 220L741 423L741 489L315 286Z" fill="#e7eae1" stroke="#566c5b" strokeWidth="3"/><path d="M315 220L495 124" fill="none" stroke="#f9faf1" strokeWidth="9"/><path d="M741 423L883 346L883 413L741 489Z" fill="#d9e2d9" stroke="#607669" strokeWidth="3"/><path d="M532 339L728 233L728 302L532 408Z" fill="#f3f5ed" stroke="#617567" strokeWidth="3"/><path d="M532 339L314 444L314 510L532 408Z" fill="#e6eae1" stroke="#617567" strokeWidth="3"/><path d="M532 339L532 408" stroke="#42594b" strokeWidth="4"/><path d="M177 296L353 204L353 264L177 359Z" fill="#dfe9e0" stroke="#5c7162" strokeWidth="3"/><path d="M177 296L220 275V338L177 359Z" fill="#8ba99c" stroke="#4e6959" strokeWidth="2"/><path d="M237 264L332 215V278L237 329Z" fill="#92aca1" stroke="#4e6959" strokeWidth="2"/><path d="M768 255L936 336V383L768 301Z" fill="#9ab2a8" stroke="#5c7567" strokeWidth="3"/><path d="M791 267L913 327V361L791 301Z" fill="#c8dcd5" stroke="#658172" strokeWidth="2"/><path d="M383 373L476 323L586 376L492 430Z" fill="#9d7865" stroke="#5d6254" strokeWidth="2"/><path d="M383 373V395L492 453V430Z" fill="#7e6555"/><path d="M492 430V453L586 400V376Z" fill="#aa8d73"/><path d="M403 380L479 339L565 380L490 421Z" fill="#e1e1d6"/><path d="M211 381L305 331L384 370L289 421Z" fill="#d6dcd1" stroke="#687b6d" strokeWidth="2"/><path d="M211 381V413L289 455V421Z" fill="#a3b5a4"/><path d="M289 421V455L384 403V370Z" fill="#bac6b7"/><path d="M220 384L304 341L370 373L288 417Z" fill="#f5f4eb"/><path d="M662 445L760 394L832 427L734 483Z" fill="#9aab9d" stroke="#5d6e60" strokeWidth="2"/><path d="M662 445V477L734 516V483Z" fill="#6e8574"/><path d="M734 483V516L832 460V427Z" fill="#879c89"/><path d="M677 445L758 404L818 430L734 474Z" fill="#d6d8ca"/><path d="M565 501L617 474L661 497L609 527Z" fill="#c9a77d" stroke="#806c55" strokeWidth="2"/><path d="M565 501V523L609 548V527Z" fill="#a58a69"/><path d="M609 527V548L661 518V497Z" fill="#bca07c"/><path d="M875 415L931 386L975 405L918 438Z" fill="#d6e3d4" stroke="#647a6b" strokeWidth="2"/><path d="M875 415V445L918 468V438Z" fill="#8ea391"/><path d="M918 438V468L975 435V405Z" fill="#b5c6b6"/><path d="M361 479L398 459L422 472L385 494Z" fill="#456e56"/><path d="M361 479V506L385 520V494Z" fill="#305640"/><path d="M385 494V520L422 498V472Z" fill="#5e8268"/><path d="M368 467L391 448L414 465" fill="none" stroke="#587f55" strokeWidth="8" strokeLinecap="round"/><path d="M140 360L166 345M156 370L182 355M173 378L198 363" stroke="#a1a9a0" strokeWidth="3"/><path d="M487 142L487 77M526 156L526 96M566 176L566 116" stroke="#94b0a0" strokeWidth="3"/></g><g fill="#3c5445" fontFamily="monospace" fontSize="13" fontWeight="600"><text x="385" y="278">LIVING / 01</text><text x="754" y="355">STUDIO / 02</text><text x="490" y="494">CIRCULATION</text></g><path d="M532 339L532 408" stroke="#78847b" strokeWidth="7" strokeDasharray="9 6"/><circle cx="532" cy="344" r="19" fill="#78847b" stroke="#fff" strokeWidth="5"/><text x="532" y="349" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="700">!</text></svg>}

const steps=[
 {tag:'01 / SOURCE',short:'Source',title:'First, find what changed.',summary:'Review the drawing revision and model reference side by side before deciding that anything is wrong.',detail:'Drawing A-104 · Revision C',finding:'Partition position differs between the two references.',status:'Source comparison',action:'Open the issue'},
 {tag:'02 / DISCREPANCY',short:'Issue',title:'Understand the discrepancy.',summary:'A potentially moved partition is flagged. The evidence is linked; accuracy has not been independently verified.',detail:'Zone 02 · Partition alignment',finding:'Model reference places the partition east of the documented position.',status:'Needs verification',action:'Review the options'},
 {tag:'03 / OPTIONS',short:'Options',title:'Consider the next action.',summary:'The proposed action remains a suggestion. The architect can compare sources and request a revised drawing.',detail:'Proposal PR-014 · Human review required',finding:'Ask the project team to confirm which reference is authoritative.',status:'Decision required',action:'Make a decision'},
 {tag:'04 / DECISION',short:'Decision',title:'Keep the architect in control.',summary:'Record a simulated review outcome; do not alter the model. Every decision must be connected to the source that justified it.',detail:'PR-014 · Review summary',finding:'No BIM file is modified and no simulated choice is sent to a server.',status:'Demonstration only',action:'Restart review'}
];
function PlanDrawing({step=0}){
 return <svg className="drawing" viewBox="0 0 640 438" role="img" aria-label="Illustrative architectural floor plan, with partition discrepancy highlighted" xmlns="http://www.w3.org/2000/svg">
  <defs><pattern id="draftgrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#dbe1d9" strokeWidth=".7"/></pattern></defs>
  <rect width="640" height="438" fill="#fbfcfa"/><rect width="640" height="438" fill="url(#draftgrid)"/>
  <g stroke="#293d32" fill="none" strokeWidth="7" strokeLinejoin="miter"><path d="M63 47H571V382H63Z M310 47V246 M63 178H310 M310 246H571 M441 246V382 M310 315H441"/></g>
  <g stroke="#809285" strokeWidth="2" fill="none"><path d="M63 226h75v-48" /><path d="M266 246v-48h44"/><path d="M441 285h44v-39"/></g>
  <rect x="89" y="205" width="154" height="137" fill="#e7ebe4" stroke="#b8c4b9" strokeWidth="1.5"/>
  <rect x="350" y="80" width="154" height="108" fill="#e8eee8" stroke="#b8c4b9" strokeWidth="1.5"/>
  <rect x="466" y="280" width="71" height="66" fill="#e8eee8" stroke="#b8c4b9" strokeWidth="1.5"/>
  <g fontSize="12" fontFamily="monospace" fill="#3b5141" letterSpacing="1"><text x="82" y="155">LIVING / 01</text><text x="355" y="219">STUDIO / 02</text><text x="463" y="363">BATH</text><text x="94" y="365">PLAN A-104</text></g>
  <path d="M310 246H441" stroke={step===0?"#81948a":"#aa402e"} strokeWidth={step===0?6:12} strokeDasharray={step===0?"6 8":"12 8"}/>
  <circle cx="376" cy="246" r="30" fill="#fff" stroke={step===0?"#3c5848":"#aa402e"} strokeWidth="3"/>
  <text x="376" y="252" textAnchor="middle" fill="#263b2e" fontSize="16" fontFamily="sans-serif" fontWeight="700">01</text>
  <g stroke="#9aa99c" strokeWidth="1.3"><path d="M63 24H571M63 19V29M571 19V29M588 47V382M583 47h10M583 382h10"/></g>
  <g fill="#627568" fontSize="11" fontFamily="monospace"><text x="295" y="19">08.7 M</text><text x="598" y="240" transform="rotate(-90 598 240)">06.4 M</text></g>
 </svg>;
}
function App(){
 const [step,setStep]=useState(0),[issue,setIssue]=useState(0),[nav,setNav]=useState(false),[outcome,setOutcome]=useState(''),[openNotes,setOpenNotes]=useState(false);
 const s=steps[step];
 const focusReview=()=>document.getElementById('review')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
 const selectIssue=i=>{setIssue(i);setStep(i===0?1:0);focusReview()};
 const advance=()=>{if(step===3){setStep(0);setOutcome('');setOpenNotes(false)}else setStep(step+1)};
 return <>
 <a href="#main" className="skip">Skip to content</a>
 <header className="siteNav">
  <div className="navWrap"><a href="#top" className="brand" aria-label="Planriva, back to top">planriva<span>.</span></a>
  <button className="menuToggle" aria-label="Toggle navigation" aria-expanded={nav} aria-controls="navLinks" onClick={()=>setNav(!nav)}>{nav?'Close':'Menu'}</button>
  <nav id="navLinks" className={nav?'isOpen':''} aria-label="Primary navigation">
   <a href="#approach" onClick={()=>setNav(false)}>Why it matters</a><a href="#review" onClick={()=>setNav(false)}>Product experience</a><a href="#method" onClick={()=>setNav(false)}>Approach</a>
   <a href="#research" className="navCta" onClick={()=>setNav(false)}>Join research</a>
  </nav></div>
 </header>
 <main id="main">
  <section className="hero" id="top">
   <div className="heroIntro wrap">
    <div className="eyebrow"><span className="eyebrowMark"></span> ARCHITECTURE / DOCUMENTATION / REVIEW <span className="edition">CONCEPT 01 — OCT 2026</span></div>
    <div className="heroGrid">
     <div><h1>Find the discrepancy.<em>Keep the decision.</em></h1><p>Drawings and models don't always agree. Planriva explores a clearer way to review what changed, check the source and decide what happens next.</p><a className="solidLink" href="#review">Review a sample issue <span aria-hidden="true">↗</span></a></div>
     <div className="heroAside"><strong>Built for architectural judgement.</strong><p>Evidence first. Suggestions second. Nothing changes without the architect.</p></div>
    </div>
   </div>
   <div className="architectureStage" aria-label="Interactive architectural project model with two selectable review points">
    <div className="stageGrid"></div><BuildingModel/>
    <div className="stageTag">PROJECT 01 <span>REFERENCE MODEL / ILLUSTRATIVE</span></div>
    <button className="marker markerOne" aria-label="Review partition alignment issue" onClick={()=>selectIssue(0)}><span className="markerDot">01</span><span className="markerText">PARTITION ALIGNMENT<small>REVIEW ISSUE</small></span></button>
    <button className="marker markerTwo" aria-label="Review source context" onClick={()=>selectIssue(1)}><span className="markerDot">02</span><span className="markerText">SOURCE CONTEXT<small>VIEW EVIDENCE</small></span></button>
    <div className="stageLegend"><b>02</b><span>Review points</span><i></i><span>Conceptual model · No live BIM data</span></div>
   </div>
  </section>
  <section id="approach" className="contextSection wrap">
   <div className="sectionIndex">01 / THE PROBLEM</div><div className="contextContent"><h2>One project.<br/><em>Different versions of the truth.</em></h2>
   <p>Architecture is already a complicated coordination problem. When a drawing, a model and a revision note disagree, the difficult part is proving which source to trust.</p>
   <div className="threeReasons"><article><b>01</b><h3>Scattered references</h3><p>Context sits across models, drawings, briefs and conversations.</p></article><article><b>02</b><h3>Repeated checks</h3><p>The same question is investigated again when its evidence is lost.</p></article><article><b>03</b><h3>Unclear ownership</h3><p>A proposal can be mistaken for an approved decision.</p></article></div>
   </div>
  </section>
  <section id="review" className="reviewSection">
   <div className="wrap">
    <div className="sectionIndex">02 / PRODUCT EXPERIENCE <span>INTERACTIVE / SYNTHETIC DATA</span></div>
    <div className="reviewIntro"><h2>One issue.<br/><em>A traceable decision.</em></h2><p>Try a four-step review. The source material, uncertainty and review outcome remain visible at every stage.</p></div>
    <div className="reviewApp" aria-label="Interactive architectural issue review demonstration">
     <div className="appHeader"><div className="appBrand"><span className="appIcon">p.</span><div><strong>Apartment A</strong><small>Coordination review · A-104</small></div></div><div className="appStatus"><span className="statusDot"></span> HUMAN REVIEW REQUIRED</div></div>
     <div className="appSteps" role="tablist" aria-label="Issue review stages">
      {steps.map((item,i)=><button key={item.tag} role="tab" type="button" aria-selected={step===i} aria-controls="stepPanel" className={step===i?'current':''} onClick={()=>setStep(i)}><span>{String(i+1).padStart(2,'0')}</span>{item.short}</button>)}
     </div>
     <div className="appBody">
      <div className="drawingPanel">
       <div className="drawingHeader"><span>REFERENCE DRAWING · REVISION C</span><strong>ZONE 02</strong></div>
       <PlanDrawing step={step}/><div className="drawingFoot"><span>01 FLAGGED PARTITION</span><span>ILLUSTRATIVE SCHEMATIC</span></div>
      </div>
      <div className="reviewPanel" id="stepPanel" role="tabpanel" aria-live="polite">
       <div className="reviewMeta">{s.tag} <span>{s.status}</span></div><h3>{s.title}</h3><p className="reviewLead">{s.summary}</p>
       <dl className="evidenceList"><div><dt>Reference</dt><dd>{s.detail}</dd></div><div><dt>Observation</dt><dd>{s.finding}</dd></div></dl>
       {step===2 && <div className="optionBlock"><strong>Suggested next step</strong><p>Request confirmation of the controlling drawing revision before any model update.</p></div>}
       {step===3 && <div className="choiceBlock"><p className="choiceTitle">Choose a simulated review outcome</p>
        <div className="choiceButtons"><button type="button" className={outcome==='Clarification requested'?'chosen':''} aria-pressed={outcome==='Clarification requested'} onClick={()=>setOutcome('Clarification requested')}>Request clarification</button><button type="button" className={outcome==='Flagged for later review'?'chosen':''} aria-pressed={outcome==='Flagged for later review'} onClick={()=>setOutcome('Flagged for later review')}>Keep for review</button></div>
        {outcome && <p className="outcomeText" role="status"><b>{outcome}</b> · This outcome is local to the demonstration; nothing is submitted.</p>}
       </div>}
       <div className="reviewActions"><button className="nextStep" type="button" onClick={advance}>{s.action}<span aria-hidden="true">↗</span></button>{step>0 && <button className="backStep" type="button" onClick={()=>setStep(step-1)}>Previous step</button>}</div>
       <p className="truthLabel">Research prototype. No BIM edits, approvals or account records are saved.</p>
      </div>
     </div>
    </div>
   </div>
  </section>
  <section className="methodSection wrap" id="method">
   <div className="sectionIndex">03 / PRINCIPLE</div><div className="methodContent"><h2>See the source.<br/>Understand the risk.<br/><em>Make the call.</em></h2>
   <div className="methodAside"><p>Software should make an architect's judgement easier to exercise, not quietly replace it.</p><button type="button" className="textDisclosure" aria-expanded={openNotes} onClick={()=>setOpenNotes(!openNotes)}>{openNotes?'Hide research boundaries':'Show research boundaries'}</button>{openNotes && <div className="noteDisclosure"><p>This experience uses invented plans, review records and illustrative geometry. It does not detect real building-code violations, connect to Archicad, change a BIM model or store decisions. Accuracy, customer workflows and time savings need validation with architecture teams.</p></div>}</div></div>
  </section>
  <section className="researchSection" id="research"><div className="wrap researchInner"><div><span className="sectionIndex">04 / RESEARCH</span><h2>Does this workflow solve<br/><em>a real coordination problem?</em></h2><p>We're speaking with architecture and BIM teams to test how they review evidence and approve changes.</p></div><a className="solidLink lightLink" href="https://tally.so/r/NpKWBN" target="_blank" rel="noopener noreferrer">Join product research <span aria-hidden="true">↗</span></a></div></section>
 </main>
 <footer className="siteFooter wrap"><a href="#top" className="brand">planriva<span>.</span></a><span>Research-stage concept · Barcelona · 2026</span><a href="#top">Back to top</a></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
