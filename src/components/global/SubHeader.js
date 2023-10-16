import parse from "html-react-parser";

const SubHeader = ({ title, className }) => {
	return (
		<div className={`banner-section ${className}`}>
			<div className='page-title'>
				<h1 className='title'>{parse(`${title}`)}</h1>
			</div>
		</div>
	);
};

export default SubHeader;
