import React from "react";

const Wealth = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Wealth Management</h3>

			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Wealth Investment</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Portfolio Management</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Tax Saving</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
				</div>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Insurance</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wealth;
