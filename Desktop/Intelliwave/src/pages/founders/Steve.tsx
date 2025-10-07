import SEO from '../../components/SEO';

export default function Steve() {
	return (
		<div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
			<SEO title="Steve Demba — Intelliwave Solutions" />
			<h2>Steve Demba</h2>
			<p style={{ color: 'var(--muted)' }}>Co-Founder, IntelliWave Solutions</p>
			<div style={{ width: 180, height: 180, borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', margin: '12px 0' }}>
				<img src="/steve.jpeg" alt="Steve Demba" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
			</div>
			<p><em>Innovative IT Graduate Driving Wave-Based Technology</em></p>
			<p>
				Steve Demba is a talented IT graduate and Co-Founder of IntelliWave Solutions, bringing four years of practical
				experience to the company’s mission of delivering cutting-edge IT solutions. With a keen interest in system
				optimization and emerging technologies, Steve collaborates with the founding team to shape IntelliWave’s vision of
				transforming data into actionable insights through innovative wave-based computing. His hands-on approach and
				technical expertise have been key to the company’s early success since its inception in 2023.
			</p>
			<h3>Professional Journey</h3>
			<p>
				Steve earned his Bachelor’s degree in Information Technology from a reputable university, where he developed a
				strong foundation in network systems and software development. Over the past four years, he has worked in various
				IT roles, including a position as a Systems Administrator at TechFlow Solutions, where he improved network
				performance for small to medium enterprises by 30%. His passion for leveraging technology to solve complex
				challenges inspired him to co-found IntelliWave Solutions, contributing to its rapid growth and client acquisition.
			</p>
			<h3>Core Skills & Expertise</h3>
			<table style={{ width: '100%', borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={{ textAlign: 'left', borderBottom: '1px solid var(--border)', padding: '8px 0' }}>Category</th>
						<th style={{ textAlign: 'left', borderBottom: '1px solid var(--border)', padding: '8px 0' }}>Skills</th>
						<th style={{ textAlign: 'left', borderBottom: '1px solid var(--border)', padding: '8px 0' }}>Proficiency Level</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Network & Systems Administration</td>
						<td>Network Configuration, Server Management (Linux/Windows), Troubleshooting</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Software Development</td>
						<td>Application Development (Python, Java), Scripting, API Integration</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Cloud Computing</td>
						<td>Cloud Deployment (AWS, Azure), Virtualization, Basic DevOps</td>
						<td>Intermediate</td>
					</tr>
					<tr>
						<td>Cybersecurity</td>
						<td>Firewall Management, Basic Penetration Testing, Data Encryption</td>
						<td>Intermediate</td>
					</tr>
					<tr>
						<td>Infrastructure Optimization</td>
						<td>System Performance Tuning, Resource Allocation, IT Support</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Team Collaboration</td>
						<td>Project Management, Client Liaison, Agile Practices</td>
						<td>Advanced</td>
					</tr>
				</tbody>
			</table>

			<h3>Thought Leadership</h3>
			<p>Steve actively engages with the IT community through local workshops and online platforms, sharing insights on system optimization and cloud technologies.</p>
			<h3>Vision for the Future</h3>
			<p>
				"I’m excited to build IntelliWave into a leader in wave-based computing, creating reliable and efficient
				solutions that empower businesses. My focus is on innovation and seamless execution." – Steve Demba
			</p>
			<p>Ready to connect? Contact Steve to discuss how IntelliWave can support your IT needs.</p>
		</div>
	);
}


