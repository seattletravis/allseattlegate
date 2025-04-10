import './landing.css';
import { NavLink } from 'react-router-dom';
import img5 from '../Media/Images/GP3.png';
import img6 from '../Media/Images/GP4.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='about-container'>
				<div className='about-left-box'>
					<ul className='landing-nav-menu'>
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
						<li className='nav-item' onClick={() => closeNav()}>
							<NavLink
								to='/contact'
								className={(navData) =>
									navData.isActive ? 'active' : 'nav-link'
								}>
								<h1>Contact Us</h1>
							</NavLink>
						</li>
					</ul>
				</div>

				<div className='landing-text-container'>
					<h1>
						ALL SEATTLE GATE IS A SMALL HANDCRAFTED-TO-ORDER GATE COMPANY BASED
						IN EDMONDS, SERVICING THE GREATER SEATTLE AREA. WE USE MODERN WOOD
						AND METAL WORKING TECHNIQUES TO FIT YOU WITH THE PERFECT GATEWAY TO
						YOUR OUTDOOR SPACE.
					</h1>
					<button>SEE GALLERY</button>
				</div>
				<div className='about-us-container'>
					<div className='about-us-left'>
						<h1 className='about-us-title'>About Us</h1>
						<h1 className='about-us-text'>
							At All Seattle Gate, we specialize in creating custom gates that
							elevate your yard with beauty and craftsmanship. Founded by two
							friends with expertise in woodworking and metal construction, we
							design gates that are both functional and timeless. From wooden
							gates for garden charm to sleek metal designs for a modern edge,
							we turn your vision into a stunning reality.
						</h1>
						<h1 className='about-us-link'>Learn more about our story.</h1>
					</div>
					<div className='about-us-right'>
						<img src={img5}></img>
					</div>
				</div>
				<div className='FAQ-container'>
					<div className='FAQ-left'>
						<img src={img6}></img>
					</div>
					<div className='FAQ-right'>
						<h1 className='FAQ-title'>Frequently Asked Questions</h1>
						<h1 className='FAQ-body-text'>
							We get a lot of questions about our products. Please read through
							our <span>freqently asked Q&As</span> if you're curious.
						</h1>
					</div>
				</div>
				<div className='landing-text-container' id='tail-test'>
					<h1>FIND YOUR PERFECT GATE</h1>
					<button>CONTACT US</button>
					<h1>IAN AND TRAVIS LOOK FORWARD TO IT!</h1>
				</div>
			</div>
			<div className='grid-container'>
				<div className='open-statement-container'>
					<div className='landing-text-container'>
						<h1>
							ALL SEATTLE GATE IS A SMALL CRAFT-TO-ORDER GATE COMPANY BASED IN
							EDMONDS AND SERVICING THE GREATER SEATTLE AREA. WE USE MODERN WOOD
							AND METAL WORKING TECHNIQUES TO FIT YOU WITH THE PERFECT GATEWAY
							TO YOUR OUTDOOR SPACE.
						</h1>
						<button>SEE GALLERY</button>
					</div>
				</div>
				<div className='about-text'>
					<div>
						<h1 className='about-us-title'>About Us</h1>
						<h1 className='about-us-text'>
							At All Seattle Gate, we specialize in creating custom gates that
							elevate your yard with beauty and craftsmanship. Founded by two
							friends with expertise in woodworking and metal construction, we
							design gates that are both functional and timeless. From wooden
							gates for garden charm to sleek metal designs for a modern edge,
							we turn your vision into a stunning reality.
						</h1>
						<h1 className='about-us-link'>Learn more about our story.</h1>
					</div>
				</div>
				<div className='about-pic'>
					<div>
						<img src={img5}></img>
					</div>
				</div>
				<div className='FAQ-pic'>
					<img src={img6}></img>
				</div>
				<div className='FAQ-text'>
					<div>
						<h1 className='FAQ-title'>Frequently Asked Questions</h1>
						<h1 className='FAQ-body-text'>
							We get a lot of questions about our products. Please read through
							our <span>freqently asked Q&As</span> if you're curious.
						</h1>
					</div>
				</div>
				<div className='close-statement-container'>
					<div className='landing-text-container' id='tail-text'>
						<h1>FIND YOUR PERFECT GATE</h1>
						<button>CONTACT US</button>
						<h1>IAN AND TRAVIS ARE LOOKING FORWARD TO IT!</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;
