import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="site-header">
			<div className="container nav">
				<div className="brand">
					<img src="/logo.jpg" alt="Intelliwave Solutions logo" width={88} height={88} />
					<div className="brand-stack">
						<span className="brand-title">Intelliwave</span>
						<span className="brand-subtitle">Solutions</span>
					</div>
				</div>
				<button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
					<span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
						<span></span><span></span><span></span>
					</span>
				</button>
				<nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
					<NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
					<NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
					<NavLink to="/founders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Founders</NavLink>
					<NavLink to="/privacy" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Privacy</NavLink>
					<NavLink to="/terms" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Terms</NavLink>
					<NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
				</nav>
			</div>
		</header>
	);
}