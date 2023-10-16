import { CONTENT_HEADING } from "../../constant";
import Content from "../global/Content";

const GeneralInfo = () => {
	return (
		<Content title={CONTENT_HEADING.GENERAL_INFO}>
			<p className='pera-text'>
				Welcome to the Author Submission Guidelines.
			</p>
			<p className='pera-text'>
				The Aakashganga platform is an{" "}
				<a href='#' className='underline blackbold'>
					Open Access Platform,
				</a>{" "}
				centred on advancing and benefiting society by offering
				unrestricted access to the most recent research. Our mission is
				to help expedite the pace of discovery and establish a more
				equitable knowledge system accessible to all.
			</p>
			<p className='pera-text'>
				We do this by making scholarly research and literature available
				freely for all by following the ‘Open Science’ principle, which
				implies that there are no financial, legal or technical barriers
				to accessing it. This means that anyone can freely read,
				download, copy, distribute, print, search for and search within
				the information, or use it in education or in any other way
				within the legal agreements.
			</p>
			<p className='pera-text'>
				At the core of the open culture lies a straightforward legal
				tool:{" "}
				<strong>
					the Creative Commons Attribution (CC BY) license.
				</strong>
			</p>
			<p className='pera-text'>
				For more information on Open Access, please read the section,
				<a href='#' className='underline blackbold'>
					How We Work
				</a>
			</p>
		</Content>
	);
};

export default GeneralInfo;
