import './navbar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Fragment } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react';

function Navbar() {
	const navigate = useNavigate();
	const closeNav = () => setNavActive(false);
	const [navActive, setNavActive] = useState(false);
	useEffect(() => {
		navActive
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [navActive]);
	function handleLogoClick() {
		navigate('/contact');
		closeNav();
	}
	return (
		<Fragment>
			<div
				className='navbar-toggle-button'
				onClick={() => setNavActive(!navActive)}>
				<span
					className={
						navActive ? 'navbar-line navActive' : 'navbar-line'
					}></span>
				<span
					className={
						navActive ? 'navbar-line navActive' : 'navbar-line'
					}></span>
				<span
					className={
						navActive ? 'navbar-line navActive' : 'navbar-line'
					}></span>
			</div>
			<div
				className={
					navActive ? 'navbar-container navActive' : 'navbar-container'
				}>
				<div className='navbar-top'>
					<h1>ALL SEATTLE GATE</h1>
				</div>
				<div>
					<ul className='nav-menu'>
						<li className='nav-item' onClick={() => closeNav()}>
							<NavLink
								to='/about'
								className={(navData) =>
									navData.isActive ? 'active' : 'nav-link'
								}>
								<h1>About</h1>
							</NavLink>
						</li>
						<li className='nav-item' onClick={() => closeNav()}>
							<NavLink
								to='/contact'
								className={(navData) =>
									navData.isActive ? 'active' : 'nav-link'
								}>
								<h1>Contact Us</h1>
							</NavLink>
						</li>

						<li className='nav-item' onClick={() => closeNav()}>
							<NavLink
								to='/photos'
								className={(navData) =>
									navData.isActive ? 'active' : 'nav-link'
								}>
								<h1>Photos</h1>
							</NavLink>
						</li>
						<li className='nav-item' onClick={() => closeNav()}>
							<NavLink
								to='/FAQ'
								className={(navData) =>
									navData.isActive ? 'active' : 'nav-link'
								}>
								<h1>FAQ</h1>
							</NavLink>
						</li>
						<li className='nav-item'>
							<a
								href='https://www.instagram.com/stratary/'
								title='Stratary on Instagram!'
								target='_blank'
								rel='noopener noreferrer'>
								<FaInstagram className='nav-icon' />
							</a>
						</li>
					</ul>
				</div>
				{/* <div className='navbar-bottom'>
					<a
						href='https://www.instagram.com/stratary/'
						title='Stratary on Instagram!'
						target='_blank'
						rel='noopener noreferrer'>
						<FaInstagram className='nav-icon' />
					</a>
				</div> */}
			</div>
		</Fragment>
	);
}

export default Navbar;
