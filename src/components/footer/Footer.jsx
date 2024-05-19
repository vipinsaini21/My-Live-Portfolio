import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Vipin</h1>.
				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#projects' className='footer__link'>
							Projects
						</a>
					</li>

					<li>
						<a href='#services' className='footer__link'>
							Services
						</a>
					</li>
				</ul>
				<div className='footer__social'>
					<a
						href='https://www.instagram.com/vipin_saini_21/'
						className='footer__social-link'
						target='__blank'
					>
						<i class='bx bxl-instagram'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/vipinsaini21/'
						className='footer__social-link'
						target='__blank'
					>
						<i class='bx bxl-linkedin-square'></i>
					</a>
					<a
						href='https://github.com/vipinsaini21'
						className='footer__social-link'
						target='__blank'
					>
						<i class='bx bxl-github'></i>
					</a>
				</div>
				<span className='footer__copy'>
					&#169; Vipin Saini. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
