export default function NotFound() {
	return (
		<div className="container" style={{ padding: 24 }}>
			<h2>Page not found</h2>
			<p style={{ color: 'var(--muted)' }}>The page you’re looking for doesn’t exist or was moved.</p>
			<a className="button" href="/">Go to Home</a>
		</div>
	);
}



