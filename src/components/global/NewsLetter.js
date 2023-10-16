function NewsLetter() {
	return (
		<>
			<div className='ag_newsletter_wrap'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-lg-6 col-12'>
							<div className='ag_newsletter_text'>
								<img
									src='assets/images/vikramshila.png'
									alt='Vikramshila'
								/>
								<p>
									Born from personal trials, Aakashganga is a
									shining star in the Vikramshila universe.{" "}
									<a href='javascript:;'>
										Learn more about Vikramshila.
									</a>
								</p>
							</div>
						</div>
						<div className='col-lg-6 col-12'>
							<div className='ag_newsletter_box'>
								<h4>
									Get top-notch content straight to your
									inbox. Just the good stuff, no spam.
									Subscribe!
								</h4>
								<div className='ag_newsletter_input'>
									<input
										type='email'
										placeholder='Enter your email'
									/>
									<button type='button'>
										<img
											src='assets/images/newsletter-btn.svg'
											alt='NewsLetter'
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NewsLetter;
