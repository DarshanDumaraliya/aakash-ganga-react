import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const UnderstandingApc = () => {
	return (
		<>
			<Content title={CONTENT_HEADING.UNDERSTANDING_APC}>
				<p className='pera-text px-3 px-lg-0'>
					In the world of academic publishing, Article Processing
					Charges (APC) play a crucial role in ensuring that scholarly
					research gets published and disseminated to a wider
					audience. APC is a fee charged to authors or their
					affiliated institutions to cover the costs associated with
					the publication process of an article in an open-access or
					subscription-based journal.
				</p>

				<p className='pera-text px-3 px-lg-0'>
					At Aakashganga, we follow the{" "}
					<span className='underline'>
						<strong>Gold Open Access Model of Publishing,</strong>
					</span>{" "}
					and our Article Processing Charges (APCs) are one of the
					most affordable in the world.
				</p>

				<p className='pera-text px-3 px-lg-0'>
					As part of our social responsibility, we are committed to
					advancing knowledge and promoting global research
					collaboration. As a researcher, if you value platforms with
					a broader mission, we are your perfect partners.
				</p>
			</Content>

			<div className='row justify-content-between align-items-center mt-5 article-launch-offer'>
				<div className='ag_special_offer_img col-lg-12 col-12 mb-5'>
					<p style={{ position: "relative" }}>
						<img src='assets/images/subtraction.svg' alt='Icon' />{" "}
						Grab The Special Launch Offer
					</p>
					<div className='ag_special_offer_text m-0'>
						<div className='ag_heading_center_wrap'>
							<h2>
								We are offering a one-time opportunity to{" "}
								<span>
									{" "}
									publish on the platform free of cost
								</span>{" "}
								for the next two months
							</h2>
							<span className='article_subtext'>
								Click here to publish your article now.{" "}
							</span>
						</div>
						<div className='ag_special_offer_btn'>
							<a href='javascript:;' className='ag_btn_red'>
								Publish Article
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UnderstandingApc;
