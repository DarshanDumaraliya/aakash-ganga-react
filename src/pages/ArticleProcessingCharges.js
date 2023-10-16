import AffordableApc from "../components/articleProcessingCharges/AffordableApc";
import ApcCard from "../components/articleProcessingCharges/ApcCard";
import ImportantNote from "../components/articleProcessingCharges/ImportantNote";
import UnderstandingApc from "../components/articleProcessingCharges/UnderstandingApc";
import Content from "../components/global/Content";
import SubHeader from "../components/global/SubHeader";
import NewsLetter from "../components/global/NewsLetter";
import { CONTENT_HEADING, SUB_HEADINGS } from "../constant";

function ArticleProcessingCharges() {
	return (
		<>
			<main className='main article-processingg-charges'>
				<SubHeader title={SUB_HEADINGS.APC_HEADER} />
				<div className='content-area'>
					<div className='container'>
						<UnderstandingApc />
						<Content title={CONTENT_HEADING.APC_INDIAN}>
							<div
								className='row article-processing mt-5 pt-4'
								style={{ justifyContent: "center" }}
							>
								<ApcCard
									isIndian={true}
									ApcPrice={"INR 14999"}
									Discount={"INR 5000"}
									IntroPrice={"INR 14999"}
									IntroGrant={"INR 5000"}
									finalPrice={"INR 9999*"}
								/>
								<ApcCard
									isIndian={true}
									ApcPrice={"INR 14999"}
									Discount={"INR 9999"}
									IntroPrice={"INR 14999"}
									IntroGrant={"INR 3000"}
									finalPrice={"3999*"}
								/>
							</div>
						</Content>
						<Content title={CONTENT_HEADING.APC_FOREGIN}>
							<div
								className='row article-processing mt-5 pt-4'
								style={{ justifyContent: "center" }}
							>
								<ApcCard
									isIndian={false}
									ApcPrice={"US$ 699"}
									Discount={"US$ 200"}
									finalPrice={"US$ 499"}
								/>
								<ApcCard
									isIndian={false}
									ApcPrice={"US$ 699"}
									Discount={"US$ 200"}
									finalPrice={"US$ 399"}
								/>
							</div>
						</Content>

						<div
							className='p-3 text-center text-white blue-border-text'
							style={{
								background: "#336D91",
								borderRadius: "10px",
							}}
						>
							<p className='m-0'>
								*If you are located in a South Asian country,
								please connect to us at <br />{" "}
								<a className='underline text-white'>
									contactus@vikramshilaedu.in
								</a>{" "}
								to avail special rates for publishing your
								article.
							</p>
						</div>

						<Content
							title={
								CONTENT_HEADING.ADD_AMENDMENTS_TO_CURRENT_ARTICLE
							}
						>
							<div className='container'>
								<div className='ag_publishjournal_text m-0 foreign-nation text-center mt-5 mb-5'>
									<h4 style={{ color: "#336D91" }}>
										For Indian & Foreign Nationals
									</h4>
									<h6>Amendment Charges</h6>
									<p className='m-0'>
										<span>**</span>We offer two amendments
										free of cost, after which the article
										will be <br /> considered a new version
										or update of the existing article.
									</p>
								</div>
							</div>
						</Content>
						<Content title={CONTENT_HEADING.UPDATE_ARTICLE}>
							<div className='row m-0 updating-article'>
								<div className='col-lg-7'>
									<h4
										style={{
											fontWeight: "600",
											color: "#336D91",
										}}
									>
										Indian Nationals
									</h4>
									<p>
										<strong>
											We offer a discount of INR 5000 on
											the final Article Processing Charge.
										</strong>
									</p>
									<p>
										<span>**</span>The update cost is
										treated as a new version of the article,
										and this will go through the same
										process as a new article.
									</p>
								</div>
								<div className='col-lg-1'></div>
								<div className='col-lg-4'>
									<h4
										style={{
											fontWeight: "600",
											color: "#336D91",
										}}
									>
										Foreign Nationals
									</h4>
									<p>
										<strong>
											To update an existing article on the
											platform, please write to us at
										</strong>
									</p>
									<p>
										<a className='underline'>
											contactus@vikramshilaedu.
										</a>
									</p>
								</div>
							</div>
						</Content>

						<ImportantNote />

						<div className='container updating-article'>
							<div className='ag_publishjournal_text text-center p-5 mt-4 m-0'>
								<h4 style={{ color: "#336D91" }}>
									We believe in Open Communication
								</h4>
								<p className='m-0'>
									We encourage you to reach out to us with any
									questions about pricing, <br /> discounts,
									or payment options. We want you to succeed,
									and help you <br /> navigate the process
									effortlessly.
								</p>
								<div className='ag_special_offer_btn'>
									<a
										href='javascript:;'
										className='ag_btn_red'
									>
										Contact us
									</a>
								</div>
								<p className='mb-0'>
									<span>**</span>We may run regular offers on
									our APCs. Please keep visiting our{" "}
									<strong className='underline'>
										homepage
									</strong>{" "}
									for details.
								</p>
							</div>
						</div>

						<AffordableApc />
					</div>
				</div>
			</main>
			<NewsLetter />
		</>
	);
}

export default ArticleProcessingCharges;
