import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import Home from './Home/Home';
// import Buy from './Buy/Buy';
// import Rules from './Rules/Rules';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import About from './About/About';
import Photos from './Photos/Photos';
import FAQ from './FAQ/FAQ';
import Landing from './Landing/Landing';

function App() {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route index element={<Landing />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/photos' element={<Photos />} />
				<Route path='/FAQ' element={<FAQ />} />
				<Route path='*' element={<Landing />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
