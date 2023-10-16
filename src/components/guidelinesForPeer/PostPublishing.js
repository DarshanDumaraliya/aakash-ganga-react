import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const PostPublishing = () => {
	return (
		<Content title={CONTENT_HEADING.POST_PUBLISHING_REVIEW}>
			<p className='pera-text'>
				{" "}
				<span className='red-text'> Please Note:</span> Every research
				scholar registering on the Aakashganga platform qualifies to be
				a Post Publishing Open Peer Reviewer.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				Post-Publication Open Peer Review is an approach to peer review
				on the Aakashganga platform that takes place after an article
				has been published in an Open Access Mega Journal and made
				available to the public. Research scholars are welcome to share
				their feedback and provide Peer Review comments on the published
				article.{" "}
			</p>

			<h2 className='small-title text-center'>
				Review and Decision-Making Process
			</h2>

			<p className='pera-text'>
				{" "}
				Under this type of Peer Review, the research article undergoes a
				thorough editorial review and quality check to ensure it meets
				the journal’s standards and policies. Once accepted, the article
				is published and made available to the public.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				Research scholars read the article and provide their feedback,
				assessments, and critiques publicly, often in the form of
				comments or annotations directly on the article or in a
				dedicated platform provided by the journal. The review process
				encourages discussion and dialogue among reviewers, the author,
				and other interested readers. The author may have the
				opportunity to respond to the reviews and address any questions
				or concerns raised.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				<span className='red-text'>Please Note:</span> It is mandatory
				for anyone to have a registered account to add an open review on
				the published article.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				The platform opens the article for feedback. We may also invite
				the scientific community, including researchers and experts in
				the field, to review the published article. This can be done
				through open invitations, social media, or targeted invitations
				to specific individuals or groups.{" "}
			</p>

			<p className='pera-text'>
				{" "}
				This approach aims to foster transparency, collaboration, and
				community engagement in the evaluation of scientific research.{" "}
			</p>

			<p className='pera-text'>
				For more questions on our processes, policies and other aspects,
				please refer to our
				<strong className='underline'> FAQ section.</strong>
			</p>
		</Content>
	);
};

export default PostPublishing;
