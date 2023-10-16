import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const ImportantNote = () => {
	return (
		<Content title={CONTENT_HEADING.IMPORTANT_NOTE}>
			<div className='row m-0 updating-article'>
				<div className='updating-article'>
					<h4
						style={{
							fontWeight: "600",
							color: "#336D91",
						}}
					>
						Indian Nationals:
					</h4>
					<p>
						<strong>Our normal publishing process:</strong>
					</p>
					<p>
						<span>1.</span> A one-time refundable fee of Rs 1000 is
						payable to access our publishing system. This is simply
						to retain the sanctity of our process and to ensure no
						bots or unknown content gets into our system. This
						amount is fully refunded to your{" "}
						<strong>Mudra Kosh</strong> (online wallet) if your
						article is rejected. For more information on this please
						see this <strong className='underline'>link.</strong>
					</p>
					<p>
						<span>2.</span> On acceptance of your article, you will
						receive a note asking you to pay the balance of the APC.
						This varies depending on whether you are eligible to a
						publishing grant or not.
					</p>
					<p>
						<strong>Launch offer:</strong>
					</p>
					<p>
						<span>1.</span> You will still need to pay the initial
						fee of Rs. 1000, however we will refund this when the
						article if published (or rejected).
					</p>
					<p>
						<span>2.</span> We are currently waiving the balance
						amount payable – please use the code{" "}
						<span className='blue-text'>Welcome2023</span> This is
						an offer that is currently available for a short time
						only. Hurry! Publish with us now.
					</p>
					<div
						className='ag_special_offer_btn'
						style={{ flexDirection: "row" }}
					>
						<a href='javascript:;' className='ag_btn_red'>
							Publish now
						</a>
					</div>
					<p className='mt-4'>
						<span>3.</span> All other terms and conditions remain
						unchanged.
					</p>
				</div>
			</div>

			<div className='row  m-0 updating-article my-5'>
				<div className=''>
					<h4
						style={{
							fontWeight: "600",
							color: "#336D91",
						}}
					>
						Foreign Nationals:
					</h4>
					<p>
						<strong>Our normal publishing process:</strong>
					</p>
					<p>
						<span>1.</span> A one-time refundable fee of US$50 is
						payable to access our publishing system. This amount is
						to register you on the platform and confirm that you are
						a human accessing the system. This ensures that no bots
						or unknown content gets into our system.
					</p>
					<p>
						This amount will be fully refunded to your account’s
						Mudra Kosh (online wallet) if your article is rejected.
						You can use this amount to write a new article or
						re-submit your article.
					</p>
					<p>
						<span>2.</span> On acceptance of your article, you will
						receive an email asking you to pay the balance of the
						APC.
					</p>
					<p>
						<strong>Launch offer:</strong>
					</p>
					<p>
						<span>1.</span> We are currently offering an opportunity
						to publish free of charge on our platform. However, you
						will still need to pay the initial fee of US$50. We will
						refund this to your account’s Mudra Kosh when the
						article is published (or rejected).
					</p>
					<p>
						<span>2.</span> We are currently waiving the balance
						amount payable – Please use the code{" "}
						<span className='blue-text'>Happiness2023</span> This is
						an offer that is currently available for a short time
						only. Hurry! Publish with us now.
					</p>
					<div
						className='ag_special_offer_btn'
						style={{ flexDirection: "row" }}
					>
						<a href='javascript:;' className='ag_btn_red'>
							Publish now
						</a>
					</div>
					<p className='mt-4'>
						<span>3.</span> All other terms and conditions remain
						unchanged.
					</p>
				</div>
			</div>
		</Content>
	);
};

export default ImportantNote;
