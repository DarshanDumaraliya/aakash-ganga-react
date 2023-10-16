import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const Publishing = () => {
	return (
		<Content title={CONTENT_HEADING.PUBLISHING}>
			<p className='pera-text'>
				The Aakashganga Platform publishes a number of different{" "}
				<a href='#' className='underline blackbold'>
					article types.
				</a>{" "}
				Our main objective is to make the research publishing journey
				easy, transparent, and affordable for our authors.
			</p>

			<p className='pera-text'>
				We publish Mega Journals and Society/University/Institute
				Journals including reports and conference proceedings.
			</p>

			<p className='pera-text'>
				The Aakashganga platform offers two kinds of Peer Reviews:
			</p>

			<ul>
				<li>Pre Publishing Double Anonymous Peer Review.</li>
				<li>Post Publishing Open Peer Review.</li>
			</ul>
			<p className='pera-text'>
				Please review the details of Aakashganga’s{" "}
				<a href='#' className='underline blackbold'>
					Peer Review
				</a>{" "}
				models before you decide to submit your article.
			</p>

			<p className='pera-text italic'>
				<span className='red-text'>Please Note:</span> When you are
				opting for Pre-Publishing Double Anonymous Peer Review, please
				be aware of the following:
			</p>

			<p className='pera-text'>
				<span className='red-text'>1.</span> Your name and affiliation
				will not be made aware to the Peer Reviewer.
			</p>

			<p className='pera-text'>
				<span className='red-text'>2.</span> It is your responsibility
				to ensure that in no part of the article, is there any direct
				reference to you or multiple authors of the research article.
			</p>

			<p className='pera-text'>
				<span className='red-text'>3.</span> Please double check
				captions, figures or tables to ensure that your name or names of
				other corresponding authors does not appear in any of these.
			</p>

			<p className='italic-title blue-text'>
				Our System is automated and driven by Artificial Intelligence.{" "}
				<br />
				Therefore, the Peer Reviewer is automatically allocated by the
				system.
			</p>
		</Content>
	);
};

export default Publishing;
