import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from './pages/App';
import NotFound from './pages/NotFound';
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Founders = React.lazy(() => import('./pages/Founders'));
const Sydney = React.lazy(() => import('./pages/founders/Sydney'));
const Steve = React.lazy(() => import('./pages/founders/Steve'));
const ContactUs = React.lazy(() => import('./pages/Contact us'));
//
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
// const Security = React.lazy(() => import('./pages/Security'));
// Default routes only
import './styles/global.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />, // handles route errors
		children: [
			{ index: true, element: <Home /> },
			{ path: 'services', element: <Services /> },
			{ path: 'founders', element: <Founders /> },
			{ path: 'founders/sydney', element: <Sydney /> },
			{ path: 'founders/steve', element: <Steve /> },
			{ path: 'contact', element: <ContactUs /> },
			{ path: 'privacy', element: <Privacy /> },
			{ path: 'terms', element: <Terms /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback={<div className="container" style={{ padding: 24 }}>Loading…</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);


