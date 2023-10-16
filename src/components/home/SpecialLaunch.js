const SpecialLaunch = () => {
	return (
		<div className='ag_main_wrap ag_special_offer_wrap  mt-5'>
			<div className='container'>
				<div className='row justify-content-between align-items-center mt-5'>
					<div className='col-lg-7 col-12'>
						<div
							className='ag_special_offer_img aos-init'
							data-aos='fade-right'
						>
							<p>
								<img
									src='assets/images/subtraction.svg'
									alt='Icon'
								/>{" "}
								Grab The Special Launch Offer
							</p>
							<img
								src='assets/images/special-offer.png'
								alt='Special Launch Offer'
								className='ag_big_img'
							/>
						</div>
					</div>
					<div className='col-lg-5 col-12'>
						<div
							className='ag_special_offer_text aos-init'
							data-aos='fade-left'
						>
							<div className='ag_heading_wrap'>
								<h2>
									Publish Your Article For Free:{" "}
									<span>Limited-Time Launch Offer!</span>
								</h2>
							</div>
							<p>
								Take advantage of our Open Access Journals
								Platform launch offer to publish your research
								paper, now.
							</p>
							<ul>
								<li>
									<p>
										<b>Indian Nationals,</b> you pay just a
										Rs. 1000 initial registration fee. This
										is refunded to your wallet in full upon
										publication or rejection.
									</p>
									<span>
										<i>
											All standard terms and conditions
											apply.
										</i>
									</span>
								</li>
								<li>
									<p>
										<b>Foreign Nationals,</b> you pay just a
										US$50 initial registration fee. This is
										refunded to your wallet in full upon
										publication or rejection.
									</p>
								</li>
							</ul>
							<div className='ag_special_offer_btn'>
								<a href='javascript:;' className='ag_btn_red'>
									Publish Your Article
								</a>
								<p>
									Inclusive, Affordable And{" "}
									<i>Open For All</i>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialLaunch;
