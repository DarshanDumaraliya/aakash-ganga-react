import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const AboutArticle = () => {
	return (
		<>
			<Content title={CONTENT_HEADING.MANUSCRIPT}>
				<p className='pera-text'>
					We encourage you to closely follow the article word count
					length given on the article submission page during
					submission. As a general rule, an article should not be less
					than 8000 words, and more than 10,000 words.{" "}
				</p>
				<p className='pera-text'>
					The article length includes only the main body of the text,
					footnotes, and all citations within it, and excludes the
					title, running title, abstract, section titles, figure and
					table captions, funding statement, acknowledgments, and
					references in the bibliography.
				</p>
			</Content>

			<Content title={CONTENT_HEADING.ARTICLE_TYPE}>
				<p className='pera-text'>
					We are happy to publish all sorts of articles. To make it
					simple for you, we have provided a simple way in which you
					identify the type of your article. Currently, we publish the
					following types of articles:
				</p>
				<p className='pera-text'>
					<span className='red-text'>1.</span>{" "}
					<strong>Original Research Articles:</strong>Present new
					findings from original research (primary and unpublished
					studies) conducted by the authors in a specific field of
					research. They include confirming or disconfirming results,
					enabling the refinement or elimination of hypotheses.
				</p>
				<p className='pera-text'>
					These articles undergo a thorough peer-review process,
					ensuring the reliability and validity of the research.
				</p>
				<p className='pera-text'>
					<span className='red-text'>2.</span>{" "}
					<strong>Review Article: </strong>
					Review articles provide an in-depth and balanced perspective
					on topics that have witnessed significant development or
					progress in recent years. It aims to summarize, evaluate,
					and synthesize the findings of multiple studies. They go
					beyond mere literature summaries and aim to offer a
					comprehensive overview of the state of the art.
				</p>
				<p className='pera-text'>
					<span className='red-text'>3.</span>{" "}
					<strong>Systematic Review: </strong>Systematic reviews are a
					specific type of research publication that aims to
					synthesize and summarize the existing evidence on a
					particular research question or topic. Systematic Review
					articles present a synthesis of previous research, and use
					clearly defined methods to identify, categorize, analyse and
					report aggregated evidence on a specific topic. Included in
					this article type are meta-syntheses, meta-analyses, mapping
					reviews, scoping reviews, systematic reviews, and systematic
					reviews with a meta-analysis.
				</p>
				<p className='pera-text'>
					<span className='red-text'>4.</span>{" "}
					<strong>Case Reports: </strong>
					These describe unique or interesting medical or clinical
					cases that contribute to the understanding of a particular
					disease, treatment, or condition. They provide a
					comprehensive account of specific patients, interventions,
					diseases, diagnostic procedures, or treatment outcomes that
					are considered rare, novel, or noteworthy.
				</p>
				<p className='pera-text'>
					<span className='red-text'>5.</span>{" "}
					<strong>Methodology Articles: </strong>These describe new
					methods or techniques developed for research or data
					analysis. Methodology articles focus on the technical
					aspects of research and often include detailed protocols or
					algorithms.
				</p>
				<p className='pera-text'>
					<span className='red-text'>6.</span>{" "}
					<strong>Data Articles:</strong>
					These focus primarily on data sets, describing and providing
					access to large data collections or databases. Data articles
					may include data descriptions, data analyses, and data
					visualization.
				</p>
				<p className='pera-text'>
					<span className='red-text'>7.</span>{" "}
					<strong>Conceptual Articles: </strong>Conceptual articles in
					research publishing are scholarly papers that focus on
					discussing theoretical or conceptual frameworks, models, or
					ideas related to a specific research topic. Unlike empirical
					research articles that present data-driven findings,
					conceptual articles provide a deep analysis and exploration
					of theoretical concepts, methodologies, or approaches within
					a particular field of study. These articles contribute to
					the advancement of knowledge by offering new perspectives,
					synthesizing existing theories, or proposing innovative
					conceptual frameworks.
				</p>
				<p className='pera-text'>
					<span className='red-text'>8.</span>{" "}
					<strong> Perspectives or Opinions:</strong>These articles
					express the author’s perspectives, opinions, or commentaries
					on a specific scientific, social, or ethical issue. They
					should provide the following
					<br />
					a) Discuss current advances and future directions.
					<br />
					b) Clear presentation of the authors’ perspective.
					<br />
					c) Accurate presentation and citations of other authors’
					work.
					<br />
					d) May include original data as well as personal insights
					and opinions.{" "}
					<strong>
						(These are only available when you choose Post
						Publishing Open Review).
					</strong>
				</p>
				<p className='pera-text'>
					<span className='red-text'>9.</span>{" "}
					<strong>Commentaries: </strong>
					Commentaries in research publishing are a form of scholarly
					communication that provides expert analysis, critique, and
					perspective on a specific research topic, article, or field
					of study. Unlike original research articles or review
					articles, commentaries are typically shorter and more
					focused on offering personal insights, opinions, and
					reflections rather than presenting new empirical data.{" "}
					<strong>
						(These are only available when you choose Post
						Publishing Open Review)
					</strong>
				</p>
				<p className='pera-text'>
					<span className='red-text'>10.</span>{" "}
					<strong>Book Reviews: </strong>
					Book reviews in research publishing refer to critical
					assessments and evaluations of published books within a
					specific academic or scholarly field. These reviews provide
					insights, analysis, and opinions on the content,
					methodology, and contribution of the book to the field of
					study. Book reviews play an important role in scholarly
					discourse by summarizing the main arguments, strengths, and
					weaknesses of the book and offering readers a critical
					perspective.{" "}
					<strong>
						(These are only available when you choose Post
						Publishing Open Review)
					</strong>
				</p>
			</Content>

			<Content title={CONTENT_HEADING.LANGUAGE_EDITING}>
				<p className='pera-text'>
					We would like to maintain the highest standards of language
					and structure integrity. To achieve this, we have an
					automated <strong>Spelling and Grammar Checker</strong>{" "}
					built into our submission module. All articles need to be
					cleared by system before they can move forward in the
					publishing process.
				</p>
				<p className='pera-text'>
					We also run a <strong>Profanity Check </strong>and
					Similarity Index check before the article can move into the
					submission stage. This is just our way of supporting our
					authors. However, it is possible you may need specific
					assistance to enhance your article.
				</p>
				<p className='pera-text'>
					If you feel you need advanced assistance with language
					editing to improve the presentation of your manuscript and
					help highlight your research, we recommend that you get in
					touch with us at
					<a
						href='mailto:contactus@vikramshilaedu.in'
						className='underline blackbold'
					>
						{" "}
						contactus@vikramshilaedu.in
					</a>
					. We will do our best to get you connected with the right
					type of editor.
				</p>
				<p className='pera-text italic'>
					<span className='red-text'>Please Note:</span> Taking help
					for manuscript language editing does not guarantee that it
					will be accepted for publication by the platform. Our
					editorial assessment on the scientific content of a
					manuscript is completely governed by our evaluation of the
					quality of the article.
				</p>
			</Content>

			<Content title={CONTENT_HEADING.LANGUAGE_STYLE}>
				<p className='pera-text'>
					The default language style at Aakashganga is American
					English. For any questions regarding style, we recommend
					authors to consult the Chicago Manual of Style.
				</p>
			</Content>
		</>
	);
};

export default AboutArticle;
