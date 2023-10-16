const FeaturedCard = ({ title, children }) => {
	return (
		<>
			<div className='archiving'>{title}</div>
			{children}
		</>
	);
};

export default FeaturedCard;
