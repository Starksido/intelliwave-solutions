import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Analytics from '../components/Analytics';

export default function App() {
	// Replace with your actual Google Analytics Measurement ID
	const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // You'll need to replace this

	return (
		<div className="app-container">
			{/* Only load analytics in production or when you have a valid ID */}
			{GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
				<Analytics measurementId={GA_MEASUREMENT_ID} />
			)}
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


