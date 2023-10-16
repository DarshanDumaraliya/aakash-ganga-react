const Content = ({ title, children }) => {
	return (
		<>
			<h2 className='large-title center-title'>{title}</h2>
			{children}
		</>
	);
};

export default Content;
