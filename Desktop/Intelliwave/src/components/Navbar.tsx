import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { trackCTAClick } from './Analytics';

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="site-header">
			<div className="brand">
				<img src="/logo.jpg" alt="Intelliwave Solutions logo" width={88} height={88} />
				<div className="brand-stack">
					<span className="brand-title">Intelliwave</span>
					<span className="brand-subtitle">Solutions</span>
				</div>
			</div>
		<button
			className="mobile-toggle"
			aria-label="Toggle navigation menu"
			aria-controls="primary-navigation"
			onClick={toggleMobileMenu}
		>
				{/* Simple hamburger icon */}
				<span className="bar" />
				<span className="bar" />
				<span className="bar" />
			</button>
			<div className="contact-info">
				<a href="mailto:support@intelliwave.com" className="contact-item">📧 support@intelliwave.com</a>
				<a href="tel:+15551234567" className="contact-item">📞 +1 (555) 123-4567</a>
				<Link to="/contact#map" className="contact-item">📍 Location</Link>
			</div>
			<div className="container nav">
				<nav id="primary-navigation" className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
					<NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
					<NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
					<NavLink to="/founders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Founders</NavLink>
					<NavLink to="/privacy" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Privacy</NavLink>
					<NavLink to="/terms" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Terms</NavLink>
					<NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
						<Link to="/contact" className="cta-button" onClick={() => trackCTAClick('get_quote', 'navbar')}>Get Free Quote</Link>
						<button className="chat-widget" onClick={() => {
							alert('Live chat would open here');
							trackCTAClick('live_chat', 'navbar');
						}} title="Live Chat">
							💬
						</button>
				</nav>
			</div>
		</header>
	);
}