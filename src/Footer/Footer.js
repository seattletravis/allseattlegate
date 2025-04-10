import './footer.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<>
			<div className='footer-container'>
				<h1>ALL SEATTLE GATE</h1>
				<a
					href='https://www.instagram.com/stratary/'
					title='Stratary on Instagram!'
					target='_blank'
					rel='noopener noreferrer'>
					<FaInstagram className='nav-icon' />
				</a>
			</div>
		</>
	);
}

export default Footer;
