import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackServiceClick, trackCTAClick } from '../components/Analytics';

export default function Home() {
	return (
		<div>
			<SEO
				title="Intelliwave Solutions — Surveillance, Cybersecurity, Cloud & IT"
				description="Surveillance & cybersecurity focused IT consulting: access control, CCTV, SIEM, network & endpoint monitoring, cloud, networks, and automation."
				ldJson={{
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'Intelliwave Solutions',
					url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
					sameAs: []
				}}
			/>
			<section className="hero full-bleed">
				<div className="hero-bg" aria-hidden="true">
					<video autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg">
						<source src="/hero.webm" type="video/webm" />
						<source src="/hero.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="container hero-content">
					<h1 className="fade-in">Fuel Your Tech with Intelligent Clarity</h1>
					<p className="fade-in delay-1 hero-description">
					We empower your business by fortifying and modernizing every layer of your technology stack. From advanced surveillance systems and robust cybersecurity defenses to scalable cloud infrastructure and high-performance networks, we deliver cutting-edge solutions that drive efficiency and security. Our approach leverages intelligent automation to streamline operations, reduce manual workloads, and enhance system reliability. Backed by measurable KPIs, we provide clear, data-driven insights to track performance, optimize outcomes, and ensure your IT environment is resilient, agile, and future-ready. Partner with us to transform your technology into a strategic asset that fuels innovation and protects your business in an ever-evolving digital landscape.
					</p>
					<div className="cta-row fade-in delay-2">
						<Link className="button primary" to="/contact" onClick={() => trackCTAClick('consultation', 'hero')}>For Consultation</Link>
						<Link className="button" to="/founders" onClick={() => trackCTAClick('meet_founders', 'hero')}>Meet the Founders</Link>
					</div>
					<div className="badges fade-in delay-3">
						<span className="badge">Serving startups to enterprises</span>
						<span className="badge">Secure-by-design delivery</span>
						<span className="badge">Cloud • Networks • AI</span>
					</div>
				</div>
			</section>

			<section className="section-spacing">
				<div className="card">
					<h3>Why Intelliwave</h3>
					<p>
						IntelliWave Solutions stands out as a forward-thinking IT and computer science firm for several
						compelling reasons, rooted in its unique approach and capabilities:
					</p>
					<ul>
						<li><strong>Innovative Wave-Based Technology</strong>: The name "IntelliWave" reflects our pioneering use of wave-based computing paradigms, blending electromagnetic wave simulations with AI to deliver cutting-edge solutions that optimize data processing and system performance.</li>
						<li><strong>Comprehensive Expertise</strong>: We combine deep IT infrastructure skills—such as network management, cloud deployment, and cybersecurity—with advanced computer science capabilities like machine learning, software development, and emerging tech prototyping, offering a holistic service suite.</li>
						<li><strong>Tailored Solutions</strong>: Our services are customized to meet the specific needs of businesses, ensuring scalability and efficiency whether you're enhancing security, optimizing infrastructure, or exploring AI-driven insights.</li>
						<li><strong>Young, Dynamic Leadership</strong>: Co-founded by recent graduates with growing expertise, we bring fresh perspectives and agility, adapting quickly to industry trends as of October 2025.</li>
						<li><strong>Commitment to Trust</strong>: With a focus on privacy and ethical practices, we build long-term partnerships by prioritizing client data security and transparency.</li>
					</ul>
					<p>
						Choosing IntelliWave means partnering with a company that's not just keeping up with technology but actively
						shaping its future, making it an ideal choice for businesses seeking innovative, reliable IT support.
					</p>
				</div>
			</section>

			<section className="section-spacing">
				<div className="bubbles">
					<Link to="/services" className="bubble" style={{ textDecoration: 'none' }} onClick={() => trackServiceClick('Physical Surveillance')}>
						<h4>Physical Surveillance</h4>
						<p>Access control & CCTV</p>
					</Link>
					<Link to="/services" className="bubble" style={{ textDecoration: 'none' }} onClick={() => trackServiceClick('Cybersecurity')}>
						<h4>Cybersecurity</h4>
						<p>SIEM • MDR • EDR</p>
					</Link>
					<Link to="/services" className="bubble" style={{ textDecoration: 'none' }} onClick={() => trackServiceClick('Cloud & Infra')}>
						<h4>Cloud & Infra</h4>
						<p>Landing zones • IaC</p>
					</Link>
					<Link to="/services" className="bubble" style={{ textDecoration: 'none' }} onClick={() => trackServiceClick('Software & Deploy')}>
						<h4>Software & Deploy</h4>
						<p>Integration • CI/CD</p>
					</Link>
				</div>
			</section>
		</div>
	);
}


