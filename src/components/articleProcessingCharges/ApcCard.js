import React from "react";

const ApcCard = ({
	isIndian,
	ApcPrice,
	Discount,
	IntroPrice,
	IntroGrant,
	finalPrice,
}) => {
	return (
		<div
			className='col-lg-5 article_col_box px-lg-0 px-3'
			style={{
				boxShadow: "0px 0px 12px #00000039",
				borderRadius: "28px",
				overflow: "hidden",
			}}
		>
			<div className='row mx-0'>
				<div
					className='col-lg-12 py-3 mb-3 px-5'
					style={{ background: "#109194" }}
				>
					<div className='top_title text-center'>
						<h4 className='text-white'>
							{" "}
							Pre Publishing Double Anonymous Peer Review{" "}
						</h4>
					</div>
				</div>
				<div className='row m-0 px-4'>
					<div className='col-lg-8 col-8 article-table-title article'>
						<p style={{ color: "#336D91" }}>
							Article Processing Charge
						</p>
					</div>
					<div className='col-lg-4 col-4 article-table-data article'>
						<p>
							<s>{ApcPrice}</s>
						</p>
					</div>
				</div>
				<div className='row m-0 px-4'>
					<div className='col-lg-8 col-8 article-table-title article'>
						<p style={{ color: "#109194" }}>
							Introductory Discount
						</p>
					</div>
					<div className='col-lg-4 col-4 article-table-data article'>
						<p style={{ color: "#109194" }}>{Discount}</p>
					</div>
				</div>
				{isIndian && (
					<>
						<div className='row m-0 px-4'>
							<div className='col-lg-8 col-8 article-table-title article'>
								<p style={{ color: "#336D91" }}>
									Introductory Price
								</p>
							</div>
							<div className='col-lg-4 col-4 article-table-data article'>
								<p>
									<s>{IntroPrice}</s>
								</p>
							</div>
						</div>
						<div className='row m-0 px-4'>
							<div className='col-lg-8 col-8 article-table-title article'>
								<p style={{ color: "#109194" }}>
									Introductory Grant
								</p>
							</div>
							<div className='col-lg-4 col-4 article-table-data article'>
								<p style={{ color: "#109194" }}>{IntroGrant}</p>
							</div>
						</div>
					</>
				)}
				<div className='row m-0 px-4'>
					<div className='col-lg-6 col-6 article-table-title article mt-4  mb-2'>
						<h5>Final Price</h5>
					</div>
					<div className='col-lg-6 col-6 article-table-data article mt-4'>
						<h5 className='price'>{finalPrice}</h5>
					</div>
				</div>
				{isIndian ? (
					<>
						<div className='row m-0 px-4'>
							<p
								className='pt-3'
								style={{
									borderTop: "1px solid #ddd",
								}}
							>
								<strong>Important Information:</strong>
							</p>
						</div>
						<div className='row m-0 px-4'>
							<ul>
								<li>
									*All discount applied to the original amount
									will be applied at the final invoice stage.
								</li>
								<li>
									*The platform exercises the right to
									withdraw the offer anytime.
								</li>
								<li>
									*The article turn-around time is within 45
									days.
								</li>
								<li>
									*There is a one time registration charge of
									INR 1000 that will be refunded to your
									wallet as soon as your article is published.
									This is to prevent bots from accessing our
									system.
								</li>
							</ul>
						</div>{" "}
					</>
				) : (
					<>
						<div className='row m-0 px-4'>
							<p
								className='pt-3'
								style={{
									borderTop: "1px solid #ddd",
								}}
							>
								*The arrticle turn-around time is within 45
								days.
							</p>
						</div>
						<div className='row m-0 px-4'>
							<ul>
								<li>
									*The platform exercises the righ to withdraw
									the offer anytime.
								</li>
								<li>
									*All discount applied to the original amount
									will be applied at the final invoice stage.
								</li>
								<li>
									*There is a one time registration charge of
									US$50 that will be refunded to your wallet
									as soon as your article is published. This
									is to prevent bots from accessing our
									system.
								</li>
							</ul>
						</div>
					</>
				)}
			</div>
			<div className='col-lg-4'></div>
		</div>
	);
};

export default ApcCard;
