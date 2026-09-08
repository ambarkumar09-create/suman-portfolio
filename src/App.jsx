import { useEffect, useMemo, useState } from 'react'
import './App.css'

const A='/images/'

const projects=[
 {id:'kitchmate',no:'01',title:'Kitchmate',subtitle:'Sync & Savor',kind:'MOBILE APP · UX/UI',hero:A+'kitchmate/Mockup 1.png',gallery:['kitchmate/Project Title.jpg','kitchmate/Project Overview.jpg','kitchmate/Goal and Problem.png','kitchmate/Pain Points.png','kitchmate/Lofi Wireframes.png','kitchmate/Usability Testings.png','kitchmate/Design Process.png','kitchmate/Impacts.png'],problem:'Cooking together remotely can feel fragmented when recipes, communication and guidance live in separate places.',goal:'Create a shared cooking experience where people can follow a recipe together, communicate naturally and keep the session connected.',solution:'A collaborative cooking flow combining synchronized recipe guidance, video calling, Food Wall interactions and AI-assisted recipe conversion.'},
 {id:'rooted',no:'02',title:'Rooted',subtitle:'Plant Care',kind:'MOBILE APP · UX/UI',hero:A+'rooted/iPhone 16 Pro Max - 1.jpg',gallery:['rooted/1.png','rooted/2.png','rooted/3.png','rooted/iPhone 16 Pro Max - 2.jpg','rooted/iPhone 16 Pro Max - 3.jpg','rooted/iPhone 16 Pro Max - 4.jpg','rooted/iPhone 16 Pro Max - 5.jpg'],problem:'Plant owners can struggle to remember different care needs across watering, sunlight and individual plant routines.',goal:'Make everyday plant care simple, visible and easy to remember without overwhelming the user.',solution:'A focused plant-care experience built around plant profiles, care information, watering cycles, sunlight guidance and reminders.'},
 {id:'roha',no:'03',title:'Roha',subtitle:'Medical Assistance',kind:'MOBILE APP · UX/UI',hero:A+'roha/White and Brown Minimalist Phone Mockup Instagram Story(1).png',gallery:['roha/Doctor dashboard (2).png','roha/White and Brown Minimalist Phone Mockup Instagram Story(1).png','roha/White and Brown Minimalist Phone Mockup Instagram Story(2).png','roha/White and Brown Minimalist Phone Mockup Instagram Story(3).png','roha/White and Brown Minimalist Phone Mockup Instagram Story(4).png'],problem:'Medical assistance workflows can become difficult when reports, diagnosis and prescriptions are handled across disconnected steps.',goal:'Create a clear digital workflow that helps medical professionals review information and move from diagnosis to prescription with less friction.',solution:'A structured interface for doctor dashboards, diagnostic report review, prescription creation, submission and follow-up.'},
 {id:'paybridge',no:'04',title:'Paybridge',subtitle:'Digital Payments',kind:'WEB · UI/UX',hero:A+'pay bridge/paybridge.jpg',gallery:['pay bridge/paybridge.jpg'],problem:'Digital payment experiences need to communicate important actions and information clearly while keeping the journey easy to understand.',goal:'Design a straightforward payment experience with strong hierarchy, clear actions and a confident visual system.',solution:'A responsive interface focused on payment flows, information hierarchy and reusable UI patterns.'},
 {id:'milkana',no:'05',title:'Milkana Professional',subtitle:'Foodservice Website',kind:'WEB · UI/UX',hero:A+'Milkana/MILKANA HOME.jpg',gallery:['Milkana/MILKANA HOME.jpg','Milkana/individual category page.png','Milkana/product page.jpg','Milkana/product detail page.png','Milkana/Recipes.png','Milkana/MILKANA ABOUT US.png'],problem:'A foodservice brand needs to present a large product range without losing clarity, brand character or useful pathways for different audiences.',goal:'Create a structured website experience that makes products and supporting content easier to discover.',solution:'A product-focused information architecture with category, product detail, recipe and brand-content journeys designed for responsive use.'},
 {id:'pivot',no:'06',title:'Pivot Consulting',subtitle:'Consulting Website',kind:'WEB · B2B / B2C',hero:A+'pivot/Purple Gradient Modern Laptop Mockup Instagram Post.png',gallery:['pivot/Purple Gradient Modern Laptop Mockup Instagram Post.png','pivot/Purple Gradient Modern Laptop Mockup Instagram Post(1).png','pivot/Purple Gradient Modern Laptop Mockup Instagram Post(2).png'],problem:'Consulting websites often need to serve multiple audiences while keeping a complex set of services and content understandable.',goal:'Create a flexible information structure that supports B2B and B2C visitors while keeping navigation and conversion paths clear.',solution:'A structured experience across Services, Service Detail, Vision, Contact, Gallery, Events, Blog and supporting content, with reusable components and developer-friendly handoff.'},
 {id:'ired',no:'07',title:'IRED',subtitle:'Real Estate Website',kind:'WEB · UI/UX',hero:A+'ired/Orange Gradient Modern Laptop Mockup Instagram Post.png',gallery:['ired/Orange Gradient Modern Laptop Mockup Instagram Post.png','ired/Orange Gradient Modern Laptop Mockup Instagram Post(2).png','ired/Orange Gradient Modern Laptop Mockup Instagram Post(3).png','ired/Orange Gradient Modern Laptop Mockup Instagram Post(4).png','ired/Orange Gradient Modern Laptop Mockup Instagram Post(5).png','ired/Orange Gradient Modern Laptop Mockup Instagram Post(6).png'],problem:'Real-estate information can become dense quickly, especially when project details, business information and regulatory content compete for attention.',goal:'Build a clear visual hierarchy that makes important property and business information easier to scan.',solution:'A component-led interface using disciplined typography, spacing and hierarchy, including project content and RERA-focused information.'}
]

const creativeProjects=[
 {title:'Logo Design',type:'BRAND IDENTITY',image:A+'logo/make-it-vector-logo.png',text:'Selected identity exploration focused on a clear, memorable visual mark.'},
 {title:'Brochure Design',type:'EDITORIAL DESIGN',image:A+'brochure/cover page_page-0001.jpg',text:'Corporate communication designed to organize information into a clean visual narrative.'},
 {title:'Marketing Creative',type:'CAMPAIGN DESIGN',image:A+'brochure/page 7_page-0001.jpg',text:'Promotional design work balancing hierarchy, brand consistency and visual impact.'}
]

const socialProjects=[
 {title:'Food Campaign',image:A+'socialmedia/food.jpg'},
 {title:'Nike Social Creative',image:A+'socialmedia/nike.jpg'}
]

function Icon({type}){
 const paths={home:<><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-7h5v7"/></>,about:<><circle cx="12" cy="7" r="3.5"/><path d="M4.5 21c.7-4.2 3.1-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/></>,work:<><path d="M5 6h.01M9 6h10M5 12h.01M9 12h10M5 18h.01M9 18h10"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></>,contact:<><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></>}
 return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

function Nav({active,setActive}){
 const items=[['home','Home','hero'],['about','About','about'],['work','Work','work'],['contact','Contact','contact']]
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});setActive(id)}
 return <nav className="floating-nav" aria-label="Portfolio navigation"><div className="nav-logo">S<span>.</span></div>{items.map(([icon,label,id])=><button key={id} className={active===id?'nav-item active':'nav-item'} onClick={()=>go(id)} aria-label={label}><span className="nav-icon"><Icon type={icon}/></span><span>{label}</span></button>)}</nav>
}

function SelectionBox({target,onClose}){
 const [rect,setRect]=useState(null)
 useEffect(()=>{const update=()=>{if(!target)return setRect(null);const el=document.querySelector(`[data-selection="${target}"]`);if(el){const r=el.getBoundingClientRect();setRect({top:r.top,left:r.left,width:r.width,height:r.height})}};update();window.addEventListener('resize',update);window.addEventListener('scroll',update,{passive:true});return()=>{window.removeEventListener('resize',update);window.removeEventListener('scroll',update)}},[target])
 if(!rect)return null
 return <div className="selection" style={{top:rect.top,left:rect.left,width:rect.width,height:rect.height}}><i/><i/><i/><i/><i/><i/><i/><i/><button onClick={onClose}>×</button><span>{target.toUpperCase()} · SELECTED</span></div>
}

function CaseStudy({p,onBack}){
 return <article className="case-study" id={p.id+'-case'}>
  <div className="case-top"><button className="back" onClick={onBack}>← Back to work</button><span>{p.no} / 07</span></div>
  <header className="case-hero">
   <div><p className="eyebrow">{p.kind}</p><h1>{p.title}<em>{p.subtitle}</em></h1><p className="case-intro">A selected project from my product and digital experience work.</p></div>
   <div className="case-meta"><span>ROLE</span><strong>UI/UX DESIGNER</strong><span>TOOLS</span><strong>FIGMA · PROTOTYPING</strong></div>
  </header>
  <div className="hero-frame" data-selection={p.id}><img src={p.hero} alt={`${p.title} project hero`} /><span className="hero-caption">{p.title} / HERO MOCKUP</span></div>
  <div className="three-part">
   <section><small>01</small><h2>Problem</h2><p>{p.problem}</p></section>
   <section><small>02</small><h2>Goal</h2><p>{p.goal}</p></section>
   <section><small>03</small><h2>Solution</h2><p>{p.solution}</p></section>
  </div>
  <div className="case-gallery">{p.gallery.map((src,i)=><figure key={src} className={i===0?'wide':''}><img src={A+src} alt={`${p.title} project screen ${i+1}`} loading="lazy"/><figcaption>{String(i+1).padStart(2,'0')} / {p.title}</figcaption></figure>)}</div>
 </article>
}

export default function App(){
 const [active,setActive]=useState('hero'); const [selected,setSelected]=useState('')
 const [open,setOpen]=useState(null)
 useEffect(()=>{const obs=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id)}, {rootMargin:'-35% 0px -55% 0px',threshold:[.1,.3,.6]});['hero','work','about','contact'].forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[])
 const featured=useMemo(()=>projects,[ ])
 return <div className="app"><Nav active={active} setActive={setActive}/><SelectionBox target={selected} onClose={()=>setSelected('')}/>
  <main>
   <section id="hero" className="hero section-pad">
    <div className="hero-copy">
      <p className="eyebrow">UI/UX DESIGNER · WEB DESIGNER · FRONTEND DESIGNER</p>
      <p className="hero-name">SUMAN NAG</p>
      <h1>Digital<br/><span>Design</span><br/>Experiences.</h1>
      <p className="lead">I design thoughtful digital experiences across products, websites and visual systems — from early flows to polished interfaces and developer-ready handoff.</p>
      <div className="hero-actions">
        <button className="primary" onClick={()=>document.getElementById('work').scrollIntoView({behavior:'smooth'})}>Explore selected work ↗</button>
        <a className="secondary" href="/resume/Suman-Nag-Resume.pdf" download="Suman-Nag-Resume.pdf">Download Resume ↓</a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="portrait-frame" data-selection="portrait">
        <img src="/images/portrait/suman-nag.jpg" alt="Suman Nag"/>
        <span className="portrait-tag">SUMAN NAG · UI/UX DESIGNER</span>
      </div>
      <div className="hero-side"><span>WEST BENGAL · INDIA</span><span className="available">● OPEN TO OPPORTUNITIES</span><p>SELECT A PROJECT<br/><b>TO EXPLORE THE WORK</b></p></div>
    </div>
   </section>
   <section id="work" className="section-pad work"><div className="section-head"><p className="eyebrow">SELECTED WORK</p><span>07 PROJECTS</span></div><div className="project-grid">{featured.map(p=><button key={p.id} className="project-card" data-selection={p.id} onMouseEnter={()=>setSelected(p.id)} onMouseLeave={()=>setSelected('')} onClick={()=>setOpen(p.id)}><span className="num">{p.no}</span><div className="card-image"><img src={p.hero} alt="" loading="lazy"/></div><div className="card-info"><div><h3>{p.title}</h3><p>{p.subtitle}</p></div><span>↗</span></div><small>{p.kind}</small></button>)}</div></section>
   <section id="creative" className="creative section-pad">
    <div className="section-head"><p className="eyebrow">BRAND & GRAPHIC DESIGN</p><span>03 / CREATIVE</span></div>
    <div className="creative-intro"><h2>Identity, editorial and campaign work built with the same attention to detail.</h2><p>Alongside product and web design, I create logos, brochures and marketing collateral that help brands communicate with clarity.</p></div>
    <div className="creative-grid">{creativeProjects.map((x,i)=><article className="creative-card" key={x.title} data-selection={'creative-'+i}><div className="creative-image"><img src={x.image} alt={x.title}/></div><small>{x.type}</small><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
   </section>
   <section id="social" className="social section-pad">
    <div className="section-head"><p className="eyebrow">SOCIAL MEDIA</p><span>04 / SOCIAL</span></div>
    <div className="social-intro"><h2>Visual content designed to stop the scroll.</h2><p>A selection of social-first creative work across food, lifestyle and brand communication.</p></div>
    <div className="social-grid">{socialProjects.map((x,i)=><article className="social-card" key={x.title} data-selection={'social-'+i}><img src={x.image} alt={x.title}/><div><small> SOCIAL CREATIVE · 0{i+1}</small><h3>{x.title}</h3></div></article>)}</div>
   </section>
   <section id="about" className="about section-pad"><div className="section-head"><p className="eyebrow">ABOUT</p><span>01 / PROFILE</span></div><div className="about-grid"><h2>Designing clear interfaces with a strong eye for visual hierarchy.</h2><div><p>I’m Suman Nag, a UI/UX and web designer working across mobile apps, websites, branding and frontend-aware design.</p><p>My process moves from structure and user flows to high-fidelity UI, prototypes, reusable components and developer handoff.</p><div className="skill-line"><span>FIGMA</span><span>ADOBE XD</span><span>CANVA</span><span>PHOTOSHOP</span><span>HTML · CSS · JS</span><span>REACT</span></div></div></div></section>
   <section id="contact" className="contact section-pad"><p className="eyebrow">LET’S TALK</p><h2>Have a project in mind?<br/><span>Let’s make it clear.</span></h2><a href="mailto:nags5496@gmail.com">nags5496@gmail.com ↗</a><div className="contact-links"><a href="https://www.linkedin.com/in/suman-nag-1995snag" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/sumannag2" target="_blank" rel="noreferrer">Behance ↗</a><a href="/resume/Suman-Nag-Resume.pdf" download="Suman-Nag-Resume.pdf">Download Resume ↓</a></div></section>
  </main>
  <footer><div>© 2026 SUMAN NAG</div><div className="footer-social"><a href="https://www.linkedin.com/in/suman-nag-1995snag" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/sumannag2" target="_blank" rel="noreferrer">Behance ↗</a><a href="#creative">Brand & Graphic ↗</a><a href="#social">Social Media ↗</a><a href="/resume/Suman-Nag-Resume.pdf" download="Suman-Nag-Resume.pdf">Resume ↓</a></div><span>DESIGNED IN FIGMA · BUILT WITH CODE</span></footer>
  {open&&<div className="case-overlay"><CaseStudy p={projects.find(x=>x.id===open)} onBack={()=>setOpen(null)}/></div>}
 </div>
}
