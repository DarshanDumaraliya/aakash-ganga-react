const PublishJournal = () => {
	return (
		<div className='ag_main_wrap ag_publishjournal_wrap'>
			<div className='container'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-lg-5 col-12'>
						<div
							className='ag_publishjournal_text aos-init'
							data-aos='fade-right'
						>
							<div className='ag_heading_wrap'>
								<h2 className='inline-title'>
									<span className='mymargin'>Come, </span>{" "}
									Publ
									<span className='publish-i-dot'>i</span>
									sh Your Journal <span>With Us</span>
								</h2>
							</div>
							<p>
								<b>
									Inviting all Universities, Institutes, and
									Societies to join Aakashganga,
								</b>{" "}
								India's own Open Access Journal Platform.
							</p>
							<p>
								We're here to{" "}
								<b>
									help you globally broadcast scholarly work.
								</b>{" "}
								We will ensure inclusivity, accessibility, and
								affordability.
							</p>
							<p>
								Whether you're an independent society journal or
								seeking an institutional partnership, let's
								collaborate to create a journal that truly
								engages your community.
							</p>
							<a href='javascript:;' className='ag_btn_red mt-5'>
								CONNECT NOW
							</a>
						</div>
					</div>
					<div className='col-lg-7 col-12'>
						<div
							className='ag_publishjournal_img aos-init'
							data-aos='fade-left'
						>
							<img
								src='assets/images/publish-journal.png'
								alt='publish journal'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublishJournal;
