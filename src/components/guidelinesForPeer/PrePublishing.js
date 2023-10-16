import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const PrePublishing = () => {
	return (
		<Content title={CONTENT_HEADING.PRE_PUBLISHING_REVIEW}>
			<p className='pera-text'>
				{" "}
				Double anonymous Peer Review refers to the process where both
				the authors and reviewers remain anonymous to each other
				throughout the review process. Unlike traditional journals where
				Publishing Editors / Publishers seek Peer Reviewers our systems
				automatically search our databases to find suitable matches and
				invite them for reviewing the article.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				This approach aims to eliminate any potential bias that may
				arise from the knowledge of the author’s or reviewer’s identity,
				ensuring that the manuscript is assessed solely based on its
				content and quality.{" "}
			</p>

			<p className='pera-text'>
				In the Pre-Publishing Double Anonymous Peer Review, our platform
				ensures that the identities of the authors are not revealed,
				either directly or indirectly.
			</p>

			<h2 className='small-title text-center'>
				Review and Decision-Making Process
			</h2>

			<p className='pera-text'>
				{" "}
				Our system is automated, driven by AI. Therefore, the Peer
				Reviewer is allocated by the system automatically.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				Once the research article is assessed by the Publishing Editor,
				they will send the manuscript to our automated system for
				assigning anonymous Peer Reviewers to review the article.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				The Peer Reviewer will evaluate the manuscript online, on our
				platform, based on a set of questions assessing the content,
				quality, and relevance to the journal’s scope without knowing
				the author’s identities and affiliations.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				Upon receiving the reviewer’s; feedback, the editor makes a
				decision based on the reviewer’s recommendations and the
				research article’s overall quality. If the article is accepted,
				it moves to the final publication stage.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				If the Peer Reviewer recommends corrections, these are received
				by the Publishing Editor, who will add their comments to the
				manuscript, and send to the author through the platform. The
				author will revise the manuscript based on the Peer Reviewer’s
				and Publishing Editor’s comments and submit the final version
				for assessment by the Publishing Editor.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				If the changes are accepted by the Publishing Editor on
				assessment, the research article will move to the final
				publication stage.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				If the manuscript is rejected, the authors may consider writing
				a new article on the Aakashganga platform or submitting it to
				another journal.{" "}
			</p>

			<p className='pera-text italic'>
				<span className='red-text'>Please Note:</span> Aakashganga
				platform allows only one level of revision to the authors after
				Peer Review.{" "}
			</p>
		</Content>
	);
};

export default PrePublishing;
