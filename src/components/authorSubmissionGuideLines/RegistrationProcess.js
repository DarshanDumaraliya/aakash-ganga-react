import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const RegistrationProcess = () => {
	return (
		<>
			<Content title={CONTENT_HEADING.REGISTER_ON_PLATFORM}>
				<p className='pera-text'>
					Your research article manuscript will be submitted directly
					on the Aakashganga platform. The first step towards this is
					creating an account with us. This is a simple process that
					should take under five minutes to complete.
				</p>
				<p className='pera-text italic'>
					<span className='red-text'>Please Note:</span> that the
					information we gather is never shared with anyone.
				</p>
			</Content>

			<Content title={CONTENT_HEADING.HOW_TO_REGISTER}>
				<div className='center-image'>
					<img src='assets/images/you-tube.png' alt='' />
				</div>
			</Content>

			<Content title={CONTENT_HEADING.ARTICLE_SUBMISSION_PROCESS}>
				<div className='center-image'>
					<img src='assets/images/you-tube.png' alt='' />
				</div>

				<p
					className='pera-text'
					style={{ textAlign: "center", marginTop: "15px" }}
				>
					Ready to submit an article but don’t have an account?
				</p>

				<div className='register-button'>
					<button>Register now</button>
				</div>

				<p className='pera-text'>
					From your account, please click the{" "}
					<a href='#' className='underline blackbold'>
						Publish Your Article
					</a>{" "}
					button. This takes you to the submission details screen. We
					require all the fields filled so that we know exactly what
					the article is about.
				</p>

				<p className='pera-text'>
					We request that you click on all the ‘I’ icons to read the
					requirements of each section before providing your details.
					We have tried to provide clear explanations and steps at
					every level of the submission process. In case, you have a
					question that is not answered, please write to us directly
					at
					<a
						href='mailto:contactus@vikramshilaedu.in'
						className='underline blackbold'
					>
						{" "}
						contactus@vikramshilaedu.in
					</a>
				</p>
			</Content>
		</>
	);
};

export default RegistrationProcess;
