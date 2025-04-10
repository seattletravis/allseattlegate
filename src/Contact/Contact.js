import './contact.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { VscCopy } from 'react-icons/vsc';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [copied, setCopied] = useState(false);
	const formRef = useRef();

	function sendEmail(e) {
		e.preventDefault();
		Swal.fire({
			title: 'Your message has been sent',
			color: 'sienna',
			icon: 'success',
			iconColor: 'sienna',
			background: 'beige',
			backdrop: `rgba(0,0,0,0.5)`,
			confirmButtonColor: 'sienna',
		});
		emailjs
			.sendForm(
				'service_ml7qr0i',
				'template_zxtx3ce',
				formRef.current,
				'pwoYrrOuJTZwxPks8'
			)
			.then(e.target.reset())
			.catch((error) => console.log(error.text));
	}
	function handleCopy() {
		let clearPopup = setTimeout(() => setCopied(false), 1500);
		copied && clearTimeout(clearPopup);
		setCopied(true);
		navigator.clipboard.writeText('travis@lamberte.com');
	}

	return (
		<div className='contact-container'>
			<div className='contact-left-box'>
				<h1 className='contact-title'>
					<span id='cLetter_c1'>C</span>
					<span id='cLetter_o'>o</span>
					<span id='cLetter_n'>n</span>
					<span id='cLetter_t1'>t</span>
					<span id='cLetter_a'>a</span>
					<span id='cLetter_c2'>c</span>
					<span id='cLetter_t2'>t</span>&nbsp;
					<span id='cLetter_m'>M</span>
					<span id='cLetter_e'>e</span>
				</h1>
				<p className='contact-message contactForm1'>
					Thank you for your support as I start my Game Design and Production
					Studio! I look forward to hearing from you. - SeattleTravis
				</p>
				<form
					className='contact-form'
					autoComplete='off'
					ref={formRef}
					onSubmit={sendEmail}>
					<ul>
						<li className='contact-item contactForm2' id='contact-half-left'>
							<input type='text' placeholder='Name' name='from_name' />
							<span className='contact-after'></span>
						</li>
						<li className='contact-item contactForm3' id='contact-half-right'>
							<input
								type='email'
								placeholder='Email*'
								name='from_email'
								required
							/>
							<span className='contact-after'></span>
						</li>
						<li className='contact-item contactForm4' id='contact-subject'>
							<input
								id='contact-third-child'
								type='text'
								placeholder='Subject'
								name='subject'
							/>
							<span className='contact-after'></span>
						</li>
						<li className='contact-item contactForm5'>
							<textarea placeholder='Message*' name='message' required />
							<span className='contact-after'></span>
						</li>
					</ul>
					<button className='contactForm6' type='submit'>
						Send message!
					</button>
				</form>
				<div className='contact-aside contactForm7'>
					<p id='contact-copy-top'>email me directly at:</p>
					<div className='contact-copy-wrap'>
						<div className='contact-copy-box'>
							<VscCopy
								title='copy address'
								onClick={() => handleCopy()}
								id='contact-copy-icon'
							/>
							{/* <p id='contact-copy-email'>myseattletravis@gmail.com</p> */}
							<a
								id='contact-copy-email'
								href='mailto:myseattletravis@gmail.com'
								target='_blank'>
								myseattletravis@gmail.com
							</a>
						</div>
						<div
							className='contact-popup'
							id={copied ? 'contact-popup-show' : undefined}>
							Copied!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
