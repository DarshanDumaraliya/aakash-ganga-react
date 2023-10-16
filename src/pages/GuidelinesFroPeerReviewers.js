import JoinBlog from "../components/global/JoinBlog";
import NewsLetter from "../components/global/NewsLetter";
import SubHeader from "../components/global/SubHeader";
import PostPublishing from "../components/guidelinesForPeer/PostPublishing";
import PrePublishing from "../components/guidelinesForPeer/PrePublishing";
import RolesOfPeers from "../components/guidelinesForPeer/RolesOfPeers";
import { SUB_HEADINGS } from "../constant";

function GuidelinesFroPeerReviewers() {
	return (
		<>
			<div className='detail-col'>
				<SubHeader
					title={SUB_HEADINGS.GUIDELINE_FOR_PEER_REVIEWERS}
					className={"guidlines"}
				/>

				<div className='content-area'>
					<div className='container'>
						<p className='pera-text'>
							{" "}
							Peer Review is the bridge that connects the author
							to its destination, their published article.
						</p>
						<p className='pera-text'>
							{" "}
							It is a proven system that uses independent
							researchers in the relevant research area to assess
							manuscripts sent to them by publishing editors for
							originality, validity, and significance. Their
							analysis determines whether a manuscript should be
							published in their journal.{" "}
						</p>
						<p className='pera-text'>
							{" "}
							In its true form, it is a symbol of real
							collaboration. Besides ensuring the integrity of a
							scholarly record, Peer Review builds communication,
							discussion, and ethical conduct.{" "}
						</p>
						<p className='pera-text'>
							{" "}
							Peer Review on Aakashganga Peer Review is as exactly
							as the name suggests. It is the review of your
							manuscript by your peers before it is published.{" "}
						</p>
						<p className='pera-text'>
							{" "}
							The Aakashganga platform offers two kinds of Peer
							Reviews:{" "}
						</p>
						<ul>
							<li>
								<strong>
									Pre Publishing Double Anonymous Peer Review
									–
								</strong>{" "}
								In this kind of Peer Review, suitable Peer
								Reviewers, selected by our system, will be
								invited to review, and present their views
								before the article is published.
							</li>
							<li>
								<strong>
									Post Publishing Open Peer Review –
								</strong>{" "}
								In this system, the Peer Review is done directly
								on the platform. No reviewers are invited
								specifically for this purpose and the review
								process remains open as long as the article is
								hosted on Aakashganga. By default, all articles
								will go for this sort of review.
							</li>
						</ul>

						<p className='pera-text'>
							{" "}
							<strong>
								{" "}
								You must be registered on the Aakashganga
								platform in order to be invited for a review.{" "}
							</strong>
						</p>

						<p className='pera-text'>
							{" "}
							We deeply appreciate the efforts of our Peer
							Reviewers and value their role in shaping the future
							of research. As a thank you gesture, we provide a
							small honorarium in the form of{" "}
							<strong> Mudras</strong> (INR) for every Peer Review
							undertaken, which is deposited in the{" "}
							<strong> Mudra Kosh </strong>
							(Wallet) in your respective account.{" "}
						</p>

						<p className='pera-text'>
							{" "}
							You may use these <strong> Mudras </strong> to write
							a new research article, or update an existing
							article on the platform.{" "}
						</p>

						<p className='pera-text italic'>
							<span className='red-text'>Please Note:</span> The
							Mudras do not hold any cash value, and can only be
							used on the platform.{" "}
						</p>

						<div className='register-button'>
							<button>Register Now</button>
						</div>

						<p className='pera-text'>
							For more information on Mudras, please refer to the{" "}
							<strong> FAQ section.</strong>{" "}
						</p>

						<RolesOfPeers />
						<PrePublishing />
						<PostPublishing />
						<JoinBlog />
					</div>
				</div>
			</div>
			<NewsLetter />
		</>
	);
}

export default GuidelinesFroPeerReviewers;
