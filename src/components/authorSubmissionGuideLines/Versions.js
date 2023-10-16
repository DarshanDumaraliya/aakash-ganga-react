import React from "react";
import Content from "../global/Content";
import { CONTENT_HEADING } from "../../constant";

const Versions = () => {
	return (
		<Content title={CONTENT_HEADING.VERSION}>
			<p className='pera-text'>
				<span className='red-text'>1.</span> Currently the new version
				creation process is handled offline.
			</p>
			<p className='pera-text'>
				<span className='red-text'>2.</span> Please go to your dashboard
				and click on the button
				<strong>‘Update’</strong> provided next to the published
				article. You will be guided on the next steps in a systematic
				manner online. You may also write to us at{" "}
				<a
					href='mailto:contactus@vikrmashilaedu.in'
					className='underline blackbold'
				></a>
				contactus@vikrmashilaedu.in.
			</p>
			<p className='pera-text'>
				In case there is any issue. Once we receive your request, we
				will share a discount coupon with you, which you can use to make
				the final payment for the new version article update.
			</p>
			<p className='pera-text'>
				<span className='red-text'>3.</span> You will need to follow the
				complete submission process again to create the new article
				version
			</p>
			<p className='pera-text'>
				<span className='red-text'>4.</span>{" "}
				<strong>Version Identification:</strong> This will be captured
				by the system and automatically reflect in the final version.
			</p>
			<p className='pera-text'>
				<span className='red-text'>5.</span>{" "}
				<strong>Revision Statement: </strong>Include a concise statement
				that highlights the changes made in the new version. This could
				involve addressing feedback from reviewers, updating results or
				conclusions, expanding the methodology, or any other
				modifications that enhance the quality or relevance of your
				research.
			</p>
			<p className='pera-text'>
				<span className='red-text'>6.</span>{" "}
				<strong>Timestamp: </strong>The date will be captured by the
				system when the article is submitted.
			</p>
			<p className='pera-text'>
				<span className='red-text'>7.</span>{" "}
				<strong>Citations and References: </strong>In case the new
				version contains significant changes, it is essential to update
				citations and references accordingly. Ensure consistency
				throughout the article and maintain accurate referencing of
				prior studies or sources.
			</p>

			<p className='pera-text'>
				Remember that adding another version of your open access
				research article is an opportunity to refine and enhance your
				work. It allows you to incorporate valuable feedback and
				updates, contributing to the continuous evolution of scientific
				knowledge. We encourage you to take It allows you to incorporate
				valuable feedback and updates, contributing to the continuous
				evolution of scientific knowledge. We encourage you to take
				advantage of this option to further advance your research.
			</p>

			<p className='pera-text'>
				<strong style={{ color: "#2a6d8d" }}>
					Open Access License:
				</strong>
				Every article published on the Aakashganga platform is the
				author’s commitment to publish the manuscript under a specific
				open-access license <strong>(CC BY NC SA)</strong> that allows
				unrestricted access and sharing of the published work without
				anyone deriving commercial benefit from sharing this. CC BY-NC
				SA license is called the{" "}
				<strong>Attribution-Non Commercial-ShareAlike</strong> license.
			</p>
			<p className='pera-text'>
				This license lets others remix, tweak, and build upon your work
				non-commercially, as long as they credit you and license their
				new creations under the identical terms. This means that anyone
				is free to use and reuse the content, as long as they provide
				proper attribution to the original source and authors.
			</p>

			<p className='pera-text'>
				<strong style={{ color: "#2a6d8d" }}>
					Publication Charges:{" "}
				</strong>
				Open Access means we don’t earn any revenue from subscribers or
				individuals who view an article. Our only source of revenue is
				the
				<a href='#' className='underline blackbold'>
					Article Processing Charge
				</a>
				. This varies from region to region. As a policy the lowest
				charge is payable by Indian nationals living in India using an
				Indian payment method. We are sensitive to the needs of
				developing nations and are doing our best to lower their burden
				when compared to other OA platforms. We also understand the need
				to price ourselves fairly and hence even in the developed world
				we are priced much lower than other platforms.
			</p>

			<p className='pera-text'>
				<strong style={{ color: "#2a6d8d" }}>
					Authorship disputes:{" "}
				</strong>
				Authorship disputes are one of the most common complaints made
				to Mega Journals. The submission process on Aakashganga platform
				is automated, and therefore, it is the Primary author’s
				responsibility to list all the author’s participating in that
				particular research and can have a reasonable claim to
				authorship as co-authors.
			</p>

			<p className='pera-text'>
				Once the article registration fee is paid, the author
				information cannot be changed.{" "}
			</p>

			<p className='pera-text'>
				In the context of scholarly work, a “co-author” refers to an
				individual who has made a substantial scholarly contribution to
				the reported work and shares both responsibility and
				accountability for the outcomes and results.
			</p>

			<p className='pera-text'>
				<strong style={{ color: "#2a6d8d" }}>
					Competing Interests:{" "}
				</strong>
				A competing interest, also referred to as a conflict of
				interest’s happens when an author or group of authors possess
				potential conflicting interests, whether professional or
				financial, that could potentially influence the submission and
				publication of their paper and its research. Such conflicting
				interests have the potential to bias or compromise the integrity
				of their manuscript or the research findings.
			</p>

			<p className='pera-text'>
				We encourage all authors participating in the research paper
				submission to declare any interests affecting their paper. If
				you are an author with Aakashganga platform, we encourage you to
				do this by filling the ‘Statements’ section of the ‘My
				Submission’ process. By volunteering this information and
				ensuring complete transparency, the author significantly
				contributes to diffusing any potential concerns regarding
				competing interests. This will help to maintain the integrity of
				their research.
			</p>

			<p className='pera-text'>
				<strong style={{ color: "#2a6d8d" }}>
					Before you submit an article, please ensure that:{" "}
				</strong>
			</p>

			<ul>
				<li>
					The manuscript you are submitting should consist of original
					research that has not been published previously, either in
					its entirety or in substantial parts.{" "}
				</li>
				<li>
					It should also not be under consideration or review by any
					other journal.{" "}
				</li>
				<li>
					We encourage the submission of manuscripts that were
					previously posted on preprint servers, such as ArXiv or
					BioRxiv.{" "}
				</li>
				<li>
					All authors participating in the research are qualified
					researchers.{" "}
				</li>
				<li>
					Please ensure that your research article meets all
					applicable research and publication standards{" "}
				</li>
				<li>
					Your manuscript includes full author and affiliation
					information, and a conflict of interest statement.
				</li>
				<li>
					You agree to pay any processing charges applicable to this
					submission. If based in an EU member country, we will also
					require a VAT registration number.
				</li>
			</ul>
		</Content>
	);
};

export default Versions;
