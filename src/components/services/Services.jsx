import React, { useState } from 'react';
import './services.css';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Services</h2>
			<span className='section__subtitle'>What I Offer</span>

			<div className='services__container container grid'>
				<div className='services__content'>
					<div>
						<i className='uil uil-arrow services__icon'></i>
						<h3 className='services__title'>
							WebPage <br /> Developer
						</h3>
					</div>
					<span className='services__button' onClick={() => toggleTab(1)}>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>
					<div
						className={
							toggleState === 1
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>
							<h3 className='services__modal-title'>WebPage Developer</h3>
							<p className='services__modal-description'>
								Crafting visually stunning and highly functional websites
								tailored to your needs.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Responsive and user-friendly designs.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										SEO-optimized for better visibility.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Fast and secure website performance.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Customizable features and integrations.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-edit services__icon'></i>
						<h3 className='services__title'>
							Backend <br /> Developer
						</h3>
					</div>
					<span className='services__button' onClick={() => toggleTab(2)}>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>
					<div
						className={
							toggleState === 2
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>
							<h3 className='services__modal-title'>Backend Developer</h3>
							<p className='services__modal-description'>
								Building robust and scalable backend solutions to power your
								applications.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Efficient database management.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Secure user authentication.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										API development and integration.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Scalable server architecture.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-web-grid services__icon'></i>
						<h3 className='services__title'>
							Product <br /> Designer
						</h3>
					</div>
					<span className='services__button' onClick={() => toggleTab(3)}>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>
					<div
						className={
							toggleState === 3
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>
							<h3 className='services__modal-title'>Product Designer</h3>
							<p className='services__modal-description'>
								Designing intuitive and engaging products that enhance user
								experiences.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										User-centered design approach.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Prototyping and wireframing.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Aesthetic and functional balance.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Iterative design process.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
