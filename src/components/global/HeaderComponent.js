function HeaderComponent() {
	return (
		<div className='ag_header_wrap d-flex flex-column'>
			<div className='ag_header_bottom'>
				<div className='container'>
					<div className='header-main-row justify-content-between align-items-center'>
						<div className='main-logo-part'>
							<div className='ag_logo'>
								<a href='index.html'>
									<img
										src='assets/images/logo.png'
										alt='Logo'
									/>
								</a>
							</div>
						</div>
						<div className='menu-center-part'>
							<div className='ag_menu'>
								<ul>
									<li className='active'>
										<a href='javascript:;'>Home</a>
									</li>
									<li>
										<a href='javascript:;'>
											explore Journals{" "}
											<img src='assets/images/downarrow.png' />
										</a>
										<ul>
											<li>
												<a href='javascript:;'>
													Samaj Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of Social
													Science
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Chanakya Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of
													Bussiness & Management
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Charakh Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of Medicine
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Abhiyantran Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of
													Engineering
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Soochna Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of
													Information Technology
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Vigyan Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of Science
												</div>
											</li>

											<li>
												<a href='javascript:;'>
													Ayuryoga Shastra
												</a>
												<div className='sub-lines'>
													{" "}
													The Mega Journal Of Ayurveda
													& Yoga
												</div>
											</li>
										</ul>
									</li>
									<li>
										<a href='javascript:;'>
											know us{" "}
											<img src='assets/images/downarrow.png' />
										</a>
										<ul className='black_text auto-width'>
											<li>
												<a href='javascript:;'>
													Who We Are
												</a>
											</li>

											<li>
												<a href='javascript:;'>
													Mission and Vision
												</a>
											</li>

											<li>
												<a href='javascript:;'>
													The Team
												</a>
											</li>
										</ul>
									</li>
									<li className='bold-menu'>
										<a href='javascript:;'>
											publish your article
										</a>
									</li>

									<a
										href='contact.html'
										className='ag_btn mobileonly'
									>
										login{" "}
										<img
											src='assets/images/icon-login.png'
											alt='authentication button icon'
										/>
									</a>
								</ul>
								<div className='ag_search_box'>
									<input
										type='text'
										placeholder='Search...'
									/>
									<div className='ag_search_icon'></div>
								</div>

								<button
									className='ag_menu_icon'
									onClick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
									aria-label='Main Menu'
								>
									<svg
										width='100'
										height='100'
										viewBox='0 0 100 100'
									>
										<path
											className='line line1'
											d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
										/>
										<path
											className='line line2'
											d='M 20,50 H 80'
										/>
										<path
											className='line line3'
											d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
										/>
									</svg>
								</button>
							</div>
						</div>
						<a href='contact.html' className='ag_btn deskonly'>
							login{" "}
							<img
								src='assets/images/icon-login.png'
								alt='authentication button icon'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderComponent;
