import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App() {
	return (
		<div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
			<Navbar />
			<main style={{ flex: 1 }}>
				<div className="container">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
}


