const Partners = () => {
	return (
		<div className='ag_main_wrap ag_partners_wrap'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-12 align-items-center'>
						<div className='ag_heading_center_wrap our-partner mt-5'>
							<h2>
								<span>Our</span> Partners
							</h2>
						</div>
					</div>
					<div className='col-12 align-items-center mt-3'>
						<div className='owl-carousel owl-theme ag_partners_slider'>
							<div className='item'>
								<img
									src='assets/images/startup-india-hub-logo.svg'
									alt='startup-india-hub-logo'
									style={{
										paddingTop: "0px",
										width: "100%",
									}}
								/>
							</div>
							<div className='item'>
								<img
									src='assets/images/msme-logo.svg'
									alt='msme-logo'
								/>
							</div>
							<div className='item'>
								<img
									src='assets/images/crossref-seeklogo-logo.svg'
									alt='crossref-seeklogo-logo'
								/>
							</div>
							<div className='item'>
								<img
									src='assets/images/dora-logo.svg'
									alt='dora-logo'
								/>
							</div>
							<div className='item'>
								<img
									src='assets/images/open-access-logo.svg'
									alt='open-access-logo'
									style={{ width: "200px" }}
								/>
							</div>
							<div className='item'>
								<img
									src='assets/images/sdg-publishers.svg'
									alt='open-access-logo'
									style={{ maxWidth: "95px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
