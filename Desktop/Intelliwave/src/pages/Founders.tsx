import { Link } from 'react-router-dom';

export default function Founders() {
	return (
		<div>
			<h2>Founders</h2>
			<p style={{ color: 'var(--muted)' }}>
				Intelliwave Solutions was founded by Sydney Ogembo and Steve Demba to deliver secure-by-design technology.
			</p>
			<div className="grid" style={{ marginTop: 16 }}>
				<Link to="/founders/sydney" className="card" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
					<div style={{ width: 140, height: 140, borderRadius: '9999px', overflow: 'hidden', border: '1px solid var(--border)', margin: '0 auto 8px' }}>
						<img src="/sydney.jpeg" alt="Sydney Ogembo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					</div>
					<h3>Sydney Ogembo</h3>
					<p style={{ margin: 0, color: 'var(--muted)' }}>Co-Founder</p>
				</Link>
				<Link to="/founders/steve" className="card" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
					<div style={{ width: 140, height: 140, borderRadius: '9999px', overflow: 'hidden', border: '1px solid var(--border)', margin: '0 auto 8px' }}>
						<img src="/steve.jpeg" alt="Steve Demba" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					</div>
					<h3>Steve Demba</h3>
					<p style={{ margin: 0, color: 'var(--muted)' }}>Co-Founder</p>
				</Link>
			</div>
		</div>
	);
}


