import SEO from '../../components/SEO';

export default function Sydney() {
	return (
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
			<SEO title="Sydney Ogembo — Intelliwave Solutions" />
			<h2>Sydney Ogembo</h2>
			<p style={{ color: 'var(--muted)' }}>Co-Founder, IntelliWave Solutions</p>
            <div style={{ width: 180, height: 180, borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', margin: '12px 0' }}>
                <img src="/sydney.jpeg" alt="Sydney Ogembo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
			<p><em>Emerging Computer Scientist Shaping Intelligent Wave Technologies</em></p>
			<p>
				Sydney Ogembo is a dynamic computer science graduate and Co-Founder of IntelliWave Solutions, bringing a fresh
				perspective and three years of hands-on experience to the forefront of innovative IT solutions. Based in the
				vibrant tech ecosystem, Sydney collaborates closely with the founding team to drive the company’s mission of
				transforming data into actionable insights using advanced wave-based computing techniques. His dedication to
				cutting-edge technology and problem-solving has been instrumental in establishing IntelliWave as an emerging player
				in the industry.
			</p>
			<h3>Professional Journey</h3>
			<p>
				Sydney graduated with a Bachelor’s degree in Computer Science from a leading university, where he excelled in
				coursework on artificial intelligence and software development. Over the past three years, he has honed his skills
				through roles at innovative startups and tech consultancies, including a position as a Junior AI Developer at
				InnovateTech, where he contributed to real-time data processing projects. Inspired by the potential of wave-based
				computing, Sydney co-founded IntelliWave Solutions in 2023, quickly building a foundation to serve a growing client
				base.
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
						<td>Artificial Intelligence & Machine Learning</td>
						<td>Machine Learning Basics (Scikit-learn), Neural Networks, Data Preprocessing</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Data Science & Analytics</td>
						<td>Data Analysis (Pandas, NumPy), Basic Visualization (Matplotlib)</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Software Engineering</td>
						<td>Web Development (Python, JavaScript), Cloud Basics (AWS), Git</td>
						<td>Advanced</td>
					</tr>
					<tr>
						<td>Distributed Systems</td>
						<td>Basic Microservices, API Design, Database Management (MySQL)</td>
						<td>Intermediate</td>
					</tr>
					<tr>
						<td>Research & Innovation</td>
						<td>Algorithm Implementation, Prototyping, Emerging Tech Exploration</td>
						<td>Intermediate</td>
					</tr>
					<tr>
						<td>Collaboration</td>
						<td>Agile Methodologies, Team Coordination, Client Communication</td>
						<td>Advanced</td>
					</tr>
				</tbody>
			</table>

			<h3>Thought Leadership</h3>
			<p>Sydney is an active participant in local tech meetups and online forums, sharing insights on emerging trends in AI and computing.</p>
			<h3>Vision for the Future</h3>
			<p>
				"I believe IntelliWave can redefine how we interact with technology by harnessing the power of waves. My goal is
				to grow with the company, turning innovative ideas into solutions that empower our clients." – Sydney Ogembo
			</p>
			<p>Interested in collaborating? Contact Sydney to explore opportunities with IntelliWave Solutions.</p>
		</div>
	);
}


