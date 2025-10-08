import { trackSocialClick } from './Analytics';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="footer-container">
				<div className="footer-main">
					{/* Company Information */}
					<div className="footer-section">
						<div className="footer-brand">
							<img src="/logo.jpg" alt="Intelliwave Solutions" width="60" height="60" />
							<div className="brand-text">
								<h3>Intelliwave Solutions</h3>
								<p>Empowering businesses through cutting-edge technology solutions. We deliver advanced surveillance systems, cybersecurity defenses, and scalable cloud infrastructure to drive efficiency and security.</p>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="footer-section">
						<h4>Quick Links</h4>
						<ul className="footer-links">
							<li><a href="/">Home</a></li>
							<li><a href="/services">Services</a></li>
							<li><a href="/founders">About Us</a></li>
							<li><a href="/contact">Contact</a></li>
							<li><a href="/contact#map">Location</a></li>
						</ul>
					</div>

					{/* Contact Information */}
					<div className="footer-section">
						<h4>Contact Us</h4>
						<div className="contact-details">
							<div className="contact-item">
								<span className="icon">📍</span>
								<div>
									<strong>Headquarters</strong>
									<p>Stanbank House, 2nd Floor<br />Nairobi, Kenya</p>
								</div>
							</div>
							<div className="contact-item">
								<span className="icon">📞</span>
								<div>
									<strong>Phone</strong>
									<p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
								</div>
							</div>
							<div className="contact-item">
								<span className="icon">📧</span>
								<div>
									<strong>Email</strong>
									<p><a href="mailto:support@intelliwave.com">support@intelliwave.com</a></p>
								</div>
							</div>
							<div className="contact-item">
								<span className="icon">🕒</span>
								<div>
									<strong>Office Hours</strong>
									<p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
								</div>
							</div>
						</div>
					</div>

					{/* Newsletter & Social */}
					<div className="footer-section">
						<h4>Stay Connected</h4>
						<div className="newsletter">
							<p>Subscribe to our newsletter for the latest tech insights and updates.</p>
							<form className="newsletter-form">
								<input type="email" placeholder="Enter your email" />
								<button type="submit">Subscribe</button>
							</form>
						</div>
						<div className="social-media">
							<h5>Follow Us</h5>
							<div className="social-links">
								<a href="https://linkedin.com/company/intelliwavesolutions" target="_blank" rel="noopener noreferrer" title="LinkedIn" onClick={() => trackSocialClick('LinkedIn')}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H6V9.62h2.34V18ZM7.17 8.55a1.36 1.36 0 1 1 0-2.73 1.36 1.36 0 0 1 0 2.73ZM18 18h-2.33v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37V18h-2.33V9.62h2.24v1.14h.03c.31-.59 1.08-1.21 2.22-1.21 2.37 0 2.81 1.56 2.81 3.6V18Z"/>
									</svg>
								</a>
								<a href="https://twitter.com/intelliwave" target="_blank" rel="noopener noreferrer" title="Twitter" onClick={() => trackSocialClick('Twitter')}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M22 5.92c-.75.33-1.56.56-2.4.66a4.2 4.2 0 0 0 1.84-2.33 8.3 8.3 0 0 1-2.65 1.01 4.15 4.15 0 0 0-7.07 3.79A11.78 11.78 0 0 1 3.15 4.6a4.14 4.14 0 0 0 1.29 5.54c-.63-.02-1.23-.2-1.76-.49v.05a4.15 4.15 0 0 0 3.33 4.07c-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06a4.17 4.17 0 0 0 3.88 2.89 8.33 8.33 0 0 1-5.15 1.78c-.33 0-.66-.02-.98-.06A11.76 11.76 0 0 0 8.1 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0 0 22 5.92Z"/>
									</svg>
								</a>
								<a href="https://facebook.com/intelliwavesolutions" target="_blank" rel="noopener noreferrer" title="Facebook" onClick={() => trackSocialClick('Facebook')}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M22 12a10 10 0 1 0-11.56 9.9v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.9h-2.32v7A10 10 0 0 0 22 12Z"/>
									</svg>
								</a>
								<a href="https://youtube.com/@intelliwavesolutions" target="_blank" rel="noopener noreferrer" title="YouTube" onClick={() => trackSocialClick('YouTube')}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M23.5 6.5a3.07 3.07 0 0 0-2.16-2.16C19.4 4 12 4 12 4s-7.4 0-9.34.34A3.07 3.07 0 0 0 .5 6.5C0 8.46 0 12 0 12s0 3.54.5 5.5a3.07 3.07 0 0 0 2.16 2.16C4.6 20 12 20 12 20s7.4 0 9.34-.34a3.07 3.07 0 0 0 2.16-2.16C24 15.54 24 12 24 12s0-3.54-.5-5.5ZM9.75 15.02V8.98l6.25 3.04-6.25 3Z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>


				{/* Footer Bottom */}
				<div className="footer-bottom">
					<div className="legal-links">
						<a href="/privacy">Privacy Policy</a>
						<a href="/terms">Terms of Service</a>
						<a href="/contact">Support</a>
						<a href="/contact#map">Find Us</a>
					</div>
					<div className="copyright">
						<p>&copy; {currentYear} Intelliwave Solutions. All rights reserved.</p>
						<p>Empowering businesses through innovative technology solutions.</p>
					</div>
				</div>
			</div>

			<style>{`
				.site-footer {
					background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
					color: #ffffff;
					padding: 60px 0 20px;
					font-family: inherit;
					border-top: 3px solid #007acc;
				}

				.footer-container {
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 20px;
				}

				.footer-main {
					display: grid;
					grid-template-columns: 2fr 1fr 1.5fr 1fr;
					gap: 40px;
					margin-bottom: 40px;
				}

				.footer-section h4 {
					color: #ffffff;
					font-size: 18px;
					font-weight: 700;
					margin-bottom: 20px;
					text-transform: uppercase;
					letter-spacing: 0.5px;
				}

				.footer-section h5 {
					color: #ffffff;
					font-size: 14px;
					font-weight: 600;
					margin-bottom: 12px;
				}

				/* Company Brand */
				.footer-brand {
					display: flex;
					gap: 15px;
					align-items: flex-start;
				}

				.footer-brand img {
					border-radius: 8px;
					flex-shrink: 0;
				}

				.brand-text h3 {
					color: #ffffff;
					font-size: 20px;
					font-weight: 700;
					margin-bottom: 10px;
				}

				.brand-text p {
					color: #cccccc;
					font-size: 14px;
					line-height: 1.6;
				}

				/* Quick Links */
				.footer-links {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.footer-links li {
					margin-bottom: 8px;
				}

				.footer-links a {
					color: #cccccc;
					text-decoration: none;
					font-size: 14px;
					transition: color 0.3s ease;
				}

				.footer-links a:hover {
					color: #007acc;
				}

				/* Contact Details */
				.contact-details {
					display: flex;
					flex-direction: column;
					gap: 15px;
				}

				.contact-item {
					display: flex;
					gap: 12px;
					align-items: flex-start;
				}

				.contact-item .icon {
					font-size: 16px;
					margin-top: 2px;
				}

				.contact-item strong {
					color: #ffffff;
					font-size: 14px;
					display: block;
					margin-bottom: 4px;
				}

				.contact-item p {
					color: #cccccc;
					font-size: 13px;
					margin: 0;
					line-height: 1.4;
				}

				.contact-item a {
					color: #007acc;
					text-decoration: none;
				}

				.contact-item a:hover {
					text-decoration: underline;
				}

				/* Newsletter */
				.newsletter p {
					color: #cccccc;
					font-size: 13px;
					margin-bottom: 15px;
					line-height: 1.5;
				}

				.newsletter-form {
					display: flex;
					gap: 8px;
				}

				.newsletter-form input {
					flex: 1;
					padding: 10px 12px;
					border: 1px solid #444;
					border-radius: 4px;
					background: #333;
					color: #ffffff;
					font-size: 13px;
				}

				.newsletter-form input::placeholder {
					color: #999;
				}

				.newsletter-form button {
					padding: 10px 16px;
					background: #007acc;
					color: #ffffff;
					border: none;
					border-radius: 4px;
					font-size: 13px;
					font-weight: 600;
					cursor: pointer;
					transition: background 0.3s ease;
				}

				.newsletter-form button:hover {
					background: #005a99;
				}

				/* Social Media */
				.social-links {
					display: flex;
					gap: 12px;
				}

				.social-links a {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 40px;
					height: 40px;
					background: #333;
					border-radius: 50%;
					color: #ffffff;
					text-decoration: none;
					transition: all 0.3s ease;
				}

				.social-links a:hover {
					background: #007acc;
					transform: translateY(-2px);
				}


				/* Footer Bottom */
				.footer-bottom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
					gap: 20px;
				}

				.legal-links {
					display: flex;
					gap: 20px;
					flex-wrap: wrap;
				}

				.legal-links a {
					color: #cccccc;
					text-decoration: none;
					font-size: 13px;
					transition: color 0.3s ease;
				}

				.legal-links a:hover {
					color: #007acc;
				}

				.copyright {
					text-align: right;
				}

				.copyright p {
					color: #999;
					font-size: 13px;
					margin: 2px 0;
				}

				/* Responsive Design */
				@media (max-width: 1024px) {
					.footer-main {
						grid-template-columns: 1fr 1fr;
						gap: 30px;
					}
				}

				@media (max-width: 768px) {
					.footer-main {
						grid-template-columns: 1fr;
						gap: 30px;
					}


					.footer-bottom {
						flex-direction: column;
						text-align: center;
					}

					.copyright {
						text-align: center;
					}

					.newsletter-form {
						flex-direction: column;
					}

					.footer-brand {
						flex-direction: column;
						text-align: center;
					}
				}

				@media (max-width: 480px) {
					.site-footer {
						padding: 40px 0 20px;
					}

					.footer-container {
						padding: 0 15px;
					}

					.social-links {
						justify-content: center;
					}

					.legal-links {
						justify-content: center;
					}
				}
			`}</style>
		</footer>
	);
}