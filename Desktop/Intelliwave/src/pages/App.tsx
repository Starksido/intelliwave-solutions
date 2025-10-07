import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App() {
	return (
		<div className="app-container">
			<Navbar />
			<main className="app-main">
				<div className="container">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
}


