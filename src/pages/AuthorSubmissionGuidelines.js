import NewsLetter from "../components/global/NewsLetter";
import AboutArticle from "../components/authorSubmissionGuideLines/AboutArticle";
import GeneralInfo from "../components/authorSubmissionGuideLines/GeneralInfo";
import Publishing from "../components/authorSubmissionGuideLines/Publishing";
import RegistrationProcess from "../components/authorSubmissionGuideLines/RegistrationProcess";
import Seo from "../components/authorSubmissionGuideLines/Seo";
import Versions from "../components/authorSubmissionGuideLines/Versions";
import Content from "../components/global/Content";
import SubHeader from "../components/global/SubHeader";
import {
	CONTENT_HEADING,
	FEATURED_CARD_HEADINGS,
	SUB_HEADINGS,
} from "../constant";
import FeaturedCard from "../components/global/FeaturedCard";

function AuthorSubmissionGuidelines() {
	return (
		<>
			<main className='main'>
				<SubHeader title={SUB_HEADINGS.AUTHOR_SUBMISSION_HEADER} />

				<div className='content-area'>
					<div className='container'>
						<GeneralInfo />
						<Publishing />
						<RegistrationProcess />
						<AboutArticle />
						<Seo />

						<Content
							title={CONTENT_HEADING.AUTHOR_AND_AFFILIATIONS}
						>
							<p className='pera-text'>
								All names should be listed together in the order
								in which these are required to be showcased on
								the article. Please provide exact and correct
								author names as these will be indexed in
								official archives. Articles can only be
								submitted from the account of the author. If an
								article has multiple authors then the article
								can be submitted from the account of any of the
								authors. We don’t permit third party submissions
								of any kind.
							</p>
						</Content>

						<Content title={CONTENT_HEADING.AI}>
							<p className='pera-text'>
								These guidelines provide acceptable use of
								generative AI technologies in the writing or
								editing of manuscripts submitted to the
								Aakashganga platform.
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									AI use by authors
								</strong>
							</p>
							<p className='pera-text'>
								We do not allow papers to be submitted with
								generative AI technology as a co-author or
								author of any manuscript as they do not fulfil
								the necessary criteria for authorship on the
								Aakashganga platform. Any papers containing such
								technology will be rejected.{" "}
							</p>
							<p className='pera-text'>
								If an author has utilized written or visual
								content generated or edited using a generative
								AI technology, they are responsible for
								verifying the factual accuracy of the content.
								This includes quotes, citations, references, and
								figures that have been created or edited.{" "}
							</p>
							<p
								className='pera-text'
								style={{ fontStyle: "italic" }}
							>
								Additionally, authors must confirm that any
								written or visual content produced or edited
								with generative AI technology is original and
								free from plagiarism.
							</p>
							<p className='pera-text italic'>
								<span className='red-text'>Please Note:</span>{" "}
								When an author has incorporated written or
								visual content generated or edited using
								generative AI technology, they must acknowledge
								this usage in the
								<strong> Acknowledgements</strong> section of
								the manuscript. If applicable, this information
								should also be included in the methods section.
								The explanation should include the name,
								version, model, and source of the generative AI
								technology. We strongly encourage authors to
								upload all input prompts provided to generative
								AI technology and the corresponding outputs
								received from the technology as supplementary
								files for the manuscript.
							</p>
						</Content>
						<Content title={CONTENT_HEADING.ABSTRACT}>
							<p className='pera-text'>
								The abstract is an important piece in the
								Article writing process as it communicates the
								general significance and conceptual advancement
								of your work to a wide readership. All Abstracts
								on Aakashganga platform should be not more than
								500 words. They should be concise and should
								avoid excessive use of abbreviations. The
								abstract should also refrain from citing
								references, figures, or tables. Clinical trial
								articles should include the unique identifier
								and URL of the publicly-accessible registration
								website for the trial. A minimum of five
								keywords are required for all article types.
								Keywords are to be entered into the specific
								section on the left side of the submissions
								page.{" "}
							</p>
						</Content>

						<Content title={CONTENT_HEADING.ACKNOWLEDGEMENTS}>
							<p className='pera-text'>
								This section expresses gratitude towards
								colleagues, universities, institutions,
								supervisors, laboratories or agencies that have
								provided valuable contributions to the author’s
								work.
							</p>
							<p className='pera-text italic'>
								<span className='red-text'>Please Note:</span>{" "}
								If the content of the current manuscript has
								been previously published, such as in a thesis
								or preprint, it should be acknowledged here,
								along with proper citation in the reference
								list.{" "}
							</p>
						</Content>

						<Content title={CONTENT_HEADING.FIGURE_AND_TABLE}>
							<p className='pera-text'>
								<strong>CC-BY License: </strong>Figures, tables,
								and images included in the manuscript will be
								published under a Creative Commons CC-BY
								license. Authors must obtain permission to use
								copyrighted material from external sources,
								including figures and images that have been
								re-published, adapted, modified, or obtained
								from the internet. It is the author’s;
								responsibility to obtain the necessary licenses,
								adhere to any citation requirements set by
								third-party rights holders, and bear any
								additional charges associated with their use.
							</p>
							<p className='pera-text'>
								We require each figure to be submitted
								individually, in the same order as they are
								referred to in the manuscript. Kindly ensure
								that each figure is mentioned in the text and in
								numerical order.{" "}
							</p>
							<p className='pera-text'>
								For graphs, there must be a self-explanatory
								label (including units) along each axis.{" "}
							</p>
							<p className='pera-text italic'>
								<span className='red-text'>Please Note:</span>{" "}
								that figures not in accordance with the
								guidelines will cause substantial delay during
								the production process.{" "}
							</p>
							<p className='pera-text'>
								At any point should there be any copyright
								issues raised with us, we will forward the same
								to the author and request that the issue be
								resolved. Should the issue remain unresolved,
								the platform, it’s owners and staff reserve the
								right to delete any such material without
								assigning any reason whatsoever.
							</p>
						</Content>

						<Content title={CONTENT_HEADING.IMAGES}>
							<p className='pera-text'>
								All images must have a resolution of 100 dpi at
								final size. Check the resolution of your figure
								by enlarging it to 150%. If the image appears
								blurry, jagged, or has a stair-stepped effect,
								the resolution is too low.
							</p>
						</Content>

						<Content title={CONTENT_HEADING.FILE_FORMATS}>
							<p className='pera-text'>
								The following formats are accepted: TIF/TIFF
								(.tif/.tiff), JPEG (.jpg) and PNG.
							</p>
						</Content>

						<Content title={CONTENT_HEADING.ACCESSIBILITY}>
							<p className='pera-text'>
								Authors are strongly encouraged to ensure that
								figures and visual elements in their articles
								are accessible for individuals with visual
								impairments. Utilizing colour effectively can
								assist individuals with low visual acuity or
								colour blindness in comprehending the article’s
								content.
							</p>
							<p className='pera-text'>
								These guidelines, which align with the W3C Web
								Content Accessibility Guidelines (WCAG 2.1), the
								recognized standard for web accessibility best
								practices, are straightforward to implement.
							</p>
							<p className='pera-text'>
								<a href='#' className='underline blackbold'>
									WCAG
								</a>
							</p>
							<p className='pera-text'>
								Avoid using red or green indicators. More than
								99% of colour-blind people have a red-green
								colour vision deficiency. People who have low
								visual acuity or colour blindness could find it
								difficult to read text with low contrast
								background colour. Try using colours that
								provide maximum contrast.WC3 recommends the
								following contrast ratio levels:
							</p>
							<p className='pera-text'>
								Level AA, contrast ratio of at least 4.5:1
							</p>
							<p className='pera-text'>
								Level AAA, contrast ratio of at least 7:1
							</p>
							<p className='pera-text'>
								You can also verify the contrast ratio of your
								palette with these online ratio checkers:
							</p>
							<p className='pera-text'>
								<a href='#' className='underline blackbold'>
									WebAIM
								</a>
							</p>
							<p className='pera-text'>
								<a href='#' className='underline blackbold'>
									Color Safe
								</a>
							</p>
						</Content>

						<Content title={CONTENT_HEADING.SUPPLEMENTARY}>
							<p className='pera-text'>
								During the article submission process, authors
								can upload supplementary material in the section
								on the article submission page link.
								Supplementary material is essentially defined as
								one that is not of primary importance to the
								main text of the article or is not to be
								included in the article due to incompatible
								formats.
							</p>
							<p className='pera-text'>
								<span className='red-text'>1.</span> Please
								upload the supplementary material without
								tracked changes, highlighted text, or line
								numbers
							</p>
							<p className='pera-text'>
								<span className='red-text'>2.</span> Remember to
								add the appropriate captions in the file.
							</p>
							<p className='pera-text'>
								<span className='red-text'>3.</span> Please
								refrain from including the title, author list,
								affiliations, or correspondence in the
								supplementary files to maintain consistency with
								the published article.
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Supplementary material Upload Format{" "}
								</strong>
							</p>
							<p className='pera-text'>
								<strong>Resolution: </strong>100 DPIs,{" "}
								<strong>Colour Mode: </strong>RGB
							</p>
							<p className='pera-text'>
								Data sheet: Word, Excel, PDF, or Zip files
								<br />
								Presentation: PowerPoint, PDF, or Zip files
							</p>
							<p className='pera-text'>
								Image: JPEG, PDF, PNG, or TIF/TIFF
								<br />
								Table: Word, Excel, or PDF
								<br />
								For supplementary images, the technical
								requirements are as follows:
							</p>
						</Content>

						<Content title={CONTENT_HEADING.REFERENCE}>
							<p className='pera-text'>
								Aakashganga journals use the Harvard
								(author-date) reference style.{" "}
							</p>
							<p className='pera-text'>
								Harvard (author-date) reference style uses the
								inclusion of in-text citations that provide
								brief information about the source, followed by
								a detailed reference list at the end of the
								document. In the Harvard (author-date) style,
								in-text citations consist of the author&#39;s
								last name and the publication year of the
								source, enclosed in parentheses. The citations
								are usually placed within the main text or in
								footnotes. For example: (Mehra, 2020), (Ghosh
								and Subramanium, 2023).{" "}
							</p>
							<p className='pera-text'>
								Our automatic Insert Citation feature will
								assist you with the process. Please see the
								section on Inserting Citations for more
								information.
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Reference list examples{" "}
								</strong>
							</p>
							<p className='pera-text'>
								This section helps you understand how to write
								the references in the relevant section of the
								submission module. If this sounds confusing
								please ensure the URL of the article you quoted
								is correctly pasted in the References section.
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Article in an online journal{" "}
								</strong>
							</p>
							<p className='pera-text'>
								Tahimic, C.G.T., Wang, Y., Bikle, D.D. (2013).
								Anabolic effects of IGF-1 signaling on the
								skeleton. Front. Endocrinol. 4:6. doi:
								10.3389/fendo.2013.00006
							</p>
							<p className='pera-text'>
								<span className='red-text'>1.</span> Ensure that
								all citations within the text, figures, or
								tables are included in the reference list, and
								vice versa.
							</p>
							<p className='pera-text'>
								<span className='red-text'>2.</span> Provide the
								names of the first six authors followed by
								&quot;et al.&quot; and, if available, the DOI
								(Digital Object Identifier). ). Alternately you
								can provide the Full URL of the article.
							</p>
							<p className='pera-text'>
								<span className='red-text'>3.</span> Abbreviate
								given names of authors to initials (e.g., Mehra,
								V., Segon, C.S., etc.).
							</p>
							<p className='pera-text'>
								<span className='red-text'>4.</span> In the
								article, when incorporating verbatim text,
								enclose it in quotation marks and clearly
								attribute it to the original source right after
								the text enclosed in quotation marks. This will
								ensure this section is not marked negatively in
								the Similarity Check Index (plagiarism checker).
							</p>
							<p className='pera-text'>
								<span className='red-text'>5.</span> Preprints
								with a DOI or archive URL can be cited and the
								citation should explicitly indicate that it is a
								preprint. If a peer-reviewed journal publication
								of the same preprint exists, prefer citing the
								official journal publication.
							</p>
							<div className='register-button'>
								<button>Submit article</button>
							</div>
						</Content>

						<Content title={CONTENT_HEADING.AMENDMENT}>
							<p className='pera-text'>
								An amendment explains any corrections, additions
								or modifications that have been made to the
								original article. It provides transparency and
								accountability to the research.{" "}
							</p>
							<p className='pera-text'>
								If you wish to add an amendment to your research
								article, please note the following:
							</p>
							<p className='pera-text'>
								<span className='red-text'>1.</span> Two
								amendments are free-of-charge on the platform.
								However, more than two amendments will be
								considered a new version or update of the
								existing article. This version update is
								chargeable. We will however be happy to provide
								you with a discount coupon of INR 5000 on the
								APC. You will need to resubmit the entire
								article in this case.
							</p>
							<p className='pera-text'>
								For any queries around amendments, please
								connect to us at{" "}
								<a
									href='mailto:contactus@vikramshilaedu.in'
									className='underline blackbold'
								>
									contactus@vikramshilaedu.in
								</a>
							</p>
							<p className='pera-text'>
								<span className='red-text'>2.</span> The
								amendment request can be launched from your
								dashboard
							</p>
							<p className='pera-text'>
								<span className='red-text'>3.</span> Please note
								that it will take an estimated time of 10
								working days to accept and reflect the
								changes. You will receive a notification via
								email once the changes have been made.
							</p>
							<p className='pera-text italic'>
								<span className='red-text'>Please Note:</span>{" "}
								Only Admin has all rights to add
								multiple amendments.
							</p>
						</Content>

						<Content title={CONTENT_HEADING.PROCESS}>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Date and Version:{" "}
								</strong>
								These fields will be automatically captured by
								the system.
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Title and Introduction:
								</strong>
								Begin by providing a clear title for the
								amendment, indicating that it is an update or
								correction to the original article. Briefly
								explain the reason for the amendment, such as an
								error or omission in the original publication.{" "}
								<strong>
									Please note that you cannot change the title
									of the main article when you are making an
									amendment.
								</strong>
							</p>
							<p className='pera-text'>
								<strong style={{ color: "#2a6d8d" }}>
									Statement of Amendment:
								</strong>
								Clearly state the specific section(s) or
								information that requires amendment. Provide a
								concise summary of the changes being made and
								their significance. This will help readers
								quickly identify the updated content.
							</p>
						</Content>

						<Versions />
						<FeaturedCard title={FEATURED_CARD_HEADINGS.ORCID}>
							<div className='archive-content'>
								<p className='pera-text'>
									In the near future, Aakashganga platform
									will become a member of ORCiD and encourages
									the utilization of ORCID iDs whenever
									feasible. To ensure compliance with this
									initiative, we require the submitting author
									to provide their submission using an ORCID
									iD.
								</p>

								<p className='pera-text'>
									<strong>ORCID</strong> (Open Researcher and
									Contributor ID) serves as an identifier for
									individuals engaged in research,
									scholarship, and innovation. It offers a
									persistent identifier, similar to how
									digital object identifiers (DOIs) provide
									identification for content-related entities
									on digital networks. It provides a unique
									ORCID iD that reliably links researchers
									with their research and affiliations.
								</p>

								<p className='pera-text'>
									Obtaining an ORCID iD is a simple and free
									process, which can be completed during the
									article submission or by logging directly
									into the ORCiD website. All authors are
									offered the chance to link their ORCID iDs
									during the ‘Submission’ process.
								</p>

								<p className='pera-text'>
									Know more about ORCiD id{" "}
									<a href='#' className='underline blackbold'>
										here.
									</a>
								</p>
							</div>
						</FeaturedCard>
					</div>
				</div>
			</main>
			<NewsLetter />
		</>
	);
}

export default AuthorSubmissionGuidelines;
