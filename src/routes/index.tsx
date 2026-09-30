import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Download, ExternalLink, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import workspace from "@/assets/developer-workspace.jpg";

const RESUME_ID = "1o9huFMPttA7bnqnHD7K-InR4IVvTUGUD";
const resumeView = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const resumeDownload = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Saloni Kumari — MERN Stack Developer" },
    { name: "description", content: "Portfolio of Saloni Kumari, a MERN Stack Developer in Jaipur building practical full-stack web applications." },
    { property: "og:title", content: "Saloni Kumari — MERN Stack Developer" },
    { property: "og:description", content: "Explore Saloni's full-stack projects, skills, experience, and resume." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Resume", "Contact"];
const skills = [
  { name: "Frontend", items: ["React.js", "React Hooks", "Context API", "React Router", "Tailwind CSS", "Material UI", "Chart.js", "HTML5", "CSS3"] },
  { name: "Backend & APIs", items: ["Node.js", "Express.js", "RESTful APIs", "Mongoose ODM", "MVC Architecture", "Joi Validation", "Axios", "CORS"] },
  { name: "Data & languages", items: ["MongoDB", "MySQL", "JavaScript (ES6+)", "Java", "Python"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "EJS"] },
];

function SectionHeading({ number, label, title, note }: { number: string; label: string; title: string; note?: string }) {
  return <div className="section-heading"><div className="section-kicker"><span>{number} /</span> {label}</div><div className="section-title-row"><h2>{title}</h2>{note && <p>{note}</p>}</div></div>;
}

function ProjectPreview({ kind }: { kind: "trading" | "rental" }) {
  if (kind === "trading") return <div className="project-visual trading-preview" aria-label="Illustration of a stock trading dashboard">
    <div className="preview-sidebar"><div className="preview-mark">Z.</div><i /><i /><i /><i /></div>
    <div className="preview-main"><div className="preview-top"><span>Overview <small> / Portfolio</small></span><span>● &nbsp; DASHBOARD</span></div><div className="preview-greeting">Portfolio overview</div><div className="preview-stats"><div><small>PORTFOLIO VALUE</small><strong>Holdings</strong><span className="positive">Current value &amp; P/L</span></div><div><small>ORDER MANAGEMENT</small><strong>Orders</strong><span>Buy workflow</span></div></div><div className="chart-label">Portfolio performance <span>1M &nbsp; 3M &nbsp; 1Y</span></div><div className="chart-area"><svg viewBox="0 0 520 105" preserveAspectRatio="none" aria-hidden="true"><path d="M0 83 C30 79 35 48 65 64 S108 92 139 54 S180 70 205 40 S255 62 281 45 S326 75 349 28 S401 54 432 23 S473 32 520 7" /></svg></div><div className="preview-list"><span>WATCHLIST</span><span>HOLDINGS</span><span>POSITIONS</span></div></div>
  </div>;
  return <div className="project-visual rental-preview" aria-label="Illustration of a property rental listing interface"><div className="rental-top"><span className="rental-logo">WanderLust<span>.</span></span><span>Explore &nbsp;&nbsp; Stays &nbsp;&nbsp; Account</span></div><div className="rental-feature"><div className="rental-image"><div className="rental-sun"/><div className="rental-hill back"/><div className="rental-hill front"/><div className="rental-house"><div className="rental-roof"/><div className="rental-window"/><div className="rental-door"/></div></div><div className="rental-info"><span>FEATURED STAY · MOUNTAIN ESCAPE</span><strong>A place to pause<br/>and feel at home.</strong><p>Thoughtful spaces for your next journey.</p><div className="rental-fake-button">Explore stays <ArrowUpRight size={12}/></div></div></div><div className="rental-bottom"><span>01 &nbsp; / &nbsp; 03</span><span>CURATED SPACES, EVERYWHERE</span></div></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "opened">("idle");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const message = String(fields.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:salonimaurya2112004@gmail.com?subject=${subject}&body=${body}`;
    setFormState("opened");
  }
  return <div className="site-shell" id="home">
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#home" aria-label="Saloni Kumari, go to top"><span className="monogram">s<span>.</span>k</span><span className="wordmark-name">saloni kumari<span className="wordmark-role"> / developer</span></span></a>
      <nav className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Main navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <div className="header-right"><span className="header-status"><span className="status-dot"/> Available for opportunities</span><a className="header-resume" href={resumeDownload} aria-label="Download resume PDF"><Download size={14}/> Resume</a></div>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
    </div></header>

    <main>
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src={workspace} width={1600} height={1024} alt="Developer desk with code on a monitor" /><div className="hero-shade"/><div className="container hero-content"><div className="hero-eyebrow"><span className="eyebrow-line"/> HELLO, I'M SALONI KUMARI <span className="eyebrow-index">01 / PORTFOLIO</span></div><h1 id="hero-title">I build web<br/>experiences that<br/><em>solve real problems.</em></h1><p>I'm a MERN Stack Developer in Jaipur, working across React, Node.js, Express.js, and MongoDB to make useful ideas work end to end.</p><div className="hero-actions"><Button asChild className="action-primary"><a href="#projects">Explore my work <ArrowUpRight/></a></Button><Button asChild variant="outline" className="action-outline"><a href="#contact">Contact me <ArrowRight/></a></Button><Button asChild variant="outline" className="action-outline"><a href={resumeDownload}>Download resume <Download/></a></Button></div><div className="hero-footer"><span><MapPin size={15}/> JAIPUR, INDIA</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div></div></section>

      <section className="section about-section" id="about"><div className="container"><SectionHeading number="01" label="ABOUT ME" title="Curious by nature. Practical by design."/><div className="about-grid"><div className="about-lead">I'm Saloni — a developer who likes figuring out how the pieces fit together, from the first interaction to the data behind it.<span className="about-cursor">_</span></div><div className="about-copy"><p>I'm studying Computer Science & Engineering (AI & DS) at Vivekananda Global University in Jaipur. Full-stack development clicked for me because it lets me follow an idea all the way through: shaping the interface, building the API, and making the data useful.</p><p>Most of my learning has come from building. A trading platform taught me how to connect a React dashboard to a REST API; a rental platform helped me understand server-side validation and clean application structure. I care about writing things that are clear, dependable, and genuinely helpful.</p><div className="about-signoff"><span className="small-square"/> CURRENTLY LEARNING, BUILDING & OPEN TO WORK</div></div></div></div></section>

      <section className="section skills-section" id="skills"><div className="container"><SectionHeading number="02" label="TOOLKIT" title="Skills, not percentages." note="The technologies I use to take an idea from interface to implementation."/><div className="skills-grid">{skills.map((group, index) => <div className="skill-group" key={group.name}><div className="skill-top"><span>0{index + 1}</span><h3>{group.name}</h3><ArrowUpRight size={18}/></div><div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="section projects-section" id="projects"><div className="container"><SectionHeading number="03" label="SELECTED WORK" title="Made to work. Made to last." note="Two full-stack builds that shaped the way I think about product, data, and the details in between."/><article className="project-row"><ProjectPreview kind="trading"/><div className="project-content"><div className="project-number">PROJECT 01 / FULL-STACK APPLICATION</div><h3>Zerodha Clone<span>↗</span></h3><p className="project-subtitle">Stock trading platform</p><p>A two-app trading experience: a public-facing site and a six-view dashboard for orders, holdings, positions, funds, and more.</p><ul><li>Express REST API with Mongoose models for holdings, positions, and orders.</li><li>Live portfolio calculations and P&L indicators from MongoDB data.</li><li>Context-driven buy flow and a Chart.js watchlist breakdown.</li></ul><div className="project-stack"><span>React</span><span>Node.js</span><span>MongoDB</span><span>Material UI</span><span>Chart.js</span></div><div className="project-footnote">Repository and live demo links available on request.</div></div></article><article className="project-row project-row-alt"><ProjectPreview kind="rental"/><div className="project-content"><div className="project-number">PROJECT 02 / FULL-STACK APPLICATION</div><h3>WanderLust<span>↗</span></h3><p className="project-subtitle">Property rental platform</p><p>A property listing application with create, view, update, and delete flows built around a straightforward MVC architecture.</p><ul><li>RESTful listing management with Express and EJS templates.</li><li>Joi validation on the server to protect create and update flows.</li><li>MongoDB persistence through Mongoose and method-override support.</li></ul><div className="project-stack"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>EJS</span><span>Joi</span></div><div className="project-footnote">Repository and live demo links available on request.</div></div></article></div></section>

      <section className="section experience-section" id="experience"><div className="container"><SectionHeading number="04" label="THE JOURNEY" title="Building the foundation."/><div className="timeline"><div className="timeline-item"><div className="timeline-date">FEB 2026 — JUL 2026 <span>EXPERIENCE</span></div><div className="timeline-body"><h3>Software Engineering Intern</h3><p className="timeline-place">DIGISAMAKSH Private Limited <span>· Remote</span></p><p>Worked across three sprint cycles, building and debugging features, resolving troubleshooting tickets, and documenting technical workflows with a cross-functional team.</p></div><ArrowUpRight className="timeline-arrow" size={20}/></div><div className="timeline-item"><div className="timeline-date">AUG 2023 — JUN 2027 <span>EDUCATION</span></div><div className="timeline-body"><h3>B.Tech in Computer Science & Engineering</h3><p className="timeline-place">Vivekananda Global University <span>· Jaipur, India</span></p><p>Specializing in Artificial Intelligence & Data Science while strengthening my foundations in programming, data structures, databases, and web development.</p></div><ArrowUpRight className="timeline-arrow" size={20}/></div><div className="timeline-item"><div className="timeline-date">BEYOND THE CLASSROOM <span>ACHIEVEMENTS</span></div><div className="timeline-body"><h3>Learning through participation</h3><p>Smart India Hackathon 2024 team member · SKILLS SPARDHA Tech Week 2026 · Coursera Certification</p></div><ArrowUpRight className="timeline-arrow" size={20}/></div></div></div></section>

      <section className="resume-section" id="resume"><div className="container resume-inner"><div><div className="section-kicker"><span>05 /</span> RESUME</div><h2>A closer look at<br/><em>the details.</em></h2><p>My background, projects, and technical skills — all in one place.</p></div><div className="resume-actions"><Button asChild variant="outline" className="action-outline"><a href={resumeView} target="_blank" rel="noopener noreferrer">View resume <ExternalLink/></a></Button><Button asChild className="action-primary"><a href={resumeDownload}>Download PDF <Download/></a></Button></div></div></section>

      <section className="section contact-section" id="contact"><div className="container"><SectionHeading number="06" label="GET IN TOUCH" title="Let's start a conversation."/><div className="contact-grid"><div className="contact-intro"><p>Have an opportunity, a project idea, or just want to say hello? I'd be glad to hear from you.</p><a className="contact-link" href="mailto:salonimaurya2112004@gmail.com"><Mail size={20}/> salonimaurya2112004@gmail.com <ArrowUpRight size={18}/></a><a className="contact-link" href="tel:+919354646752"><Phone size={20}/> +91 9354646752 <ArrowUpRight size={18}/></a><div className="contact-location"><MapPin size={17}/> Based in Jaipur, India</div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-pair"><label>Your name<input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label></div><label>Message<textarea name="message" rows={5} placeholder="Tell me what you're working on..." required minLength={10}/></label><div className="form-bottom"><p>This opens your email app with your message ready to send.</p><Button type="submit" className="action-primary">Prepare email <ArrowUpRight/></Button></div>{formState === "opened" && <p className="form-feedback" role="status"><Check size={16}/> Your email app should open with a draft. Please send it from there.</p>}</form></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="footer-mark" href="#home">s<span>.</span>k</a><span>© {new Date().getFullYear()} Saloni Kumari. Built with intention.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}