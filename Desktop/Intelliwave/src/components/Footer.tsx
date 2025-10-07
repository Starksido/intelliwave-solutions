export default function Footer() {
	const currentYear = new Date().getFullYear();
	const currentDateTime = new Date().toLocaleString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZoneName: 'short',
		timeZone: 'EAT'
	}).replace('EAT', 'East Africa Time');

	return (
		<footer className="site-footer">
			<div className="container">
				<div className="footer-top">
					<div className="footer-brand">
						<span>© {currentYear} IntelliWave Solutions. All rights reserved.</span>
						<p className="footer-slogan">Innovating the Future with Wave-Based Technology</p>
					</div>
					<div className="footer-links">
						<a href="/founders">About Us</a>
						<a href="/services">Services</a>
						<a href="/contact">Contact</a>
						<a href="/privacy">Privacy Policy</a>
						<a href="/terms">Terms of Service</a>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-info">
						<p>Headquarters: Stanbank house, 2nd floor, Nairobi, Kenya</p>
						<p>Email: info@intelliwavesolutions.com | Phone: +1-800-INTELLI</p>
						
					</div>
					<div className="footer-social">
						<a className="social-item" href="https://linkedin.com/company/intelliwavesolutions" target="_blank" rel="noopener noreferrer">
							<span>LinkedIn</span>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H6V9.62h2.34V18ZM7.17 8.55a1.36 1.36 0 1 1 0-2.73 1.36 1.36 0 0 1 0 2.73ZM18 18h-2.33v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37V18h-2.33V9.62h2.24v1.14h.03c.31-.59 1.08-1.21 2.22-1.21 2.37 0 2.81 1.56 2.81 3.6V18Z"/>
							</svg>
						</a>
						<a className="social-item" href="https://twitter.com/intelliwave" target="_blank" rel="noopener noreferrer">
							<span>Twitter</span>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path fill="currentColor" d="M22 5.92c-.75.33-1.56.56-2.4.66a4.2 4.2 0 0 0 1.84-2.33 8.3 8.3 0 0 1-2.65 1.01 4.15 4.15 0 0 0-7.07 3.79A11.78 11.78 0 0 1 3.15 4.6a4.14 4.14 0 0 0 1.29 5.54c-.63-.02-1.23-.2-1.76-.49v.05a4.15 4.15 0 0 0 3.33 4.07c-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06a4.17 4.17 0 0 0 3.88 2.89 8.33 8.33 0 0 1-5.15 1.78c-.33 0-.66-.02-.98-.06A11.76 11.76 0 0 0 8.1 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0 0 22 5.92Z"/>
							</svg>
						</a>
						<a className="social-item" href="https://facebook.com/intelliwavesolutions" target="_blank" rel="noopener noreferrer">
							<span>Facebook</span>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.9v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.9h-2.32v7A10 10 0 0 0 22 12Z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<style>{`
				.site-footer {
					background: #7fbf9f; /* light jungle green */
					color: var(--text);
					padding: 28px 16px;
					font-family: inherit;
					border-top: 1px solid rgba(226, 232, 240, 0.6);
				}
				.container {
					max-width: 1100px;
					margin: 0 auto;
					padding: 0 16px;
				}
				.footer-top {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					gap: 16px;
					margin-bottom: 12px;
				}
				.footer-brand { font-size: 14px; }
				.footer-slogan { font-size: 12px; color: var(--muted); margin: 6px 0 0; }
				.footer-links a { color: #0a0a0a; font-weight: 700; opacity: 1; text-decoration: none; margin-left: 12px; font-size: 14px; }
				.footer-links a:hover { color: var(--primary-700); text-decoration: underline; }
				.footer-bottom {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					gap: 16px;
					border-top: 1px solid var(--border);
					padding-top: 16px;
					font-size: 12px;
					color: #0a0a0a;
					font-weight: 700;
				}
				.footer-info p { margin: 4px 0; }
				.footer-social { display: flex; gap: 16px; flex-wrap: nowrap; align-items: center; }
				.footer-social .social-item { color: #0a0a0a; font-weight: 700; opacity: 1; text-decoration: none; display: flex; flex-direction: row; align-items: center; gap: 8px; }
				.footer-social .social-item:hover { color: var(--primary-700); }
				@media (max-width: 768px) {
					.footer-top, .footer-bottom { flex-direction: column; text-align: center; }
					.footer-links, .footer-social { margin-top: 10px; }
				}
			`}</style>
		</footer>
	);
}