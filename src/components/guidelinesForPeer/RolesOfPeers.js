import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const RolesOfPeers = () => {
	return (
		<Content title={CONTENT_HEADING.ROLES_OF_PEERS}>
			<p className='pera-text text-center subtext_col-wrp'>
				Peer Reviewers play a critical role in the Pre-Publishing Double
				Anonymous Peer Review
				<p className='pera-text text-center'>
					process of Aakashganga, the Open Access Journal platform.
				</p>{" "}
			</p>

			<div className='row align-items-center mt-5'>
				<div className='col-lg-8'>
					<div className='row align-items-center mb-4 mt-5'>
						<div className='col-lg-3'>
							<img
								src='assets/images/role-1.png'
								alt='role-1'
								className='icon-oimage'
							/>
						</div>
						<div className='col-lg-8'>
							<h2 className='small-title'>
								Evaluating Manuscripts
							</h2>

							<p className='pera-text'>
								Peer Reviewers will assess the scientific
								quality, validity, and methodology of the
								submitted manuscripts.
							</p>

							<p className='pera-text'>
								This may include but not limited to examining
								the research design, data analysis, results, and
								conclusions to ensure they are robust and
								supported by evidence.
							</p>
						</div>
					</div>

					<div className='row align-items-center mb-4'>
						<div className='col-lg-3'>
							<img
								src='assets/images/Providing Constructive Feedback.png'
								alt='role-1'
								className='icon-oimage'
							/>
						</div>
						<div className='col-lg-8'>
							<h2 className='small-title'>
								Providing Constructive Feedback
							</h2>

							<p className='pera-text'>
								Peer Reviewers are expected to offer
								constructive feedback for the submitted
								manuscript, in the prescribed format.{" "}
							</p>

							<p className='pera-text'>
								All remarks will be visible to the Publishing
								Editor however the identity of the Peer Reviewer
								remains anonymous.{" "}
							</p>
						</div>
					</div>
					<div className='row align-items-center mb-4'>
						<div className='col-lg-3'>
							<img
								src='assets/images/Assessing Originality And Significance.png'
								alt='role-1'
								className='icon-oimage'
							/>
						</div>
						<div className='col-lg-8'>
							<h2 className='small-title'>
								Assessing Originality And Significance
							</h2>

							<p className='pera-text'>
								Peer Reviewers will evaluate the contribution
								every article makes to the discipline and where
								possible check for authenticity of process/data.{" "}
							</p>

							<p className='pera-text'>
								A Mega Journal by definition has a broader scope
								of acceptance as long as the article makes a
								contribution to the discipline.{" "}
							</p>
						</div>
					</div>

					<div className='row align-items-center mb-4'>
						<div className='col-lg-3'>
							<img
								src='assets/images/Meeting Deadlines.png'
								alt='role-1'
								className='icon-oimage'
							/>
						</div>
						<div className='col-lg-8'>
							<h2 className='small-title'>Meeting Deadlines</h2>

							<p className='pera-text'>
								Reviewers are expected to complete their reviews
								within a reasonable timeframe (as agreed when
								accepting the assignment) to ensure timely
								publication. If they anticipate any delays, they
								should inform the admin of the platform
								promptly.{" "}
							</p>
						</div>
					</div>
				</div>
				<div className='col-lg-4'>
					<p className='pera-text'>
						In case of any questions, Peer Reviewers should write to{" "}
						<strong>contactus@vikramshilaedu.in </strong>
						to resolve their queries.{" "}
					</p>
					<div className='register-button click-here-shastra'>
						<button>Contact Us</button>
					</div>
				</div>
			</div>
		</Content>
	);
};

export default RolesOfPeers;
