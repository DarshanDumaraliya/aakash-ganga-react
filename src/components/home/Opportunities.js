const opportunityData = [
	{
		heading: "Authors & Research Scholars",
		subHeading: "Publish with Confidence",
		description:
			"A platform built by researchers, for researchers. Transparent, fast and always affordable. Find out more about us.",
		imgUrl: "url(assets/images/oppor-1.png)",
		details: [
			"Find A Journal",
			"Publish Your Article",
			"Submission Guidelines",
			"Our Publishing Model",
			"Article Processing Charges",
			"Resources",
			"Publish With Us",
		],
	},
	{
		heading: "Editors & Reviewers",
		subHeading: "Sculpt the Future",
		description:
			"Want to know how we publish? Here’s the lowdown. Come join us as a Publishing Editor and/or Peer Reviewer",
		imgUrl: "url(assets/images/oppor-2.png)",
		details: [
			"How We Publish",
			"Peer Review Model & Guidelines",
			"Publish Editor Responsibilities",
			"Join Us As A Publishing Editor",
			"Join Us As A Peer Reviewer",
		],
	},
	{
		heading: "Universities, Societies, Institutes",
		subHeading: "Fuel Scholarly Research",
		description:
			"Want to launch your own journal? Find out how we can be your first and only choice. Simple, Affordable, Global.",
		imgUrl: "url(assets/images/oppor-3.png)",
		details: ["Overview", "Why Aakashganga", "Connect Now"],
	},
];

const Opportunities = () => {
	return opportunityData.map((opportunity) => (
		<div
			key={opportunity.heading}
			className='col-xl-4 col-lg-6 col-sm-6 opportunity-card-container'
		>
			<div
				className='ag_opportunities_box aos-init'
				data-aos='zoom-in-up'
			>
				<div
					className='cimg'
					style={{
						backgroundImage: opportunity.imgUrl,
					}}
				></div>
				<h3 className='cactive redHeader'>{opportunity.heading}</h3>
				<h4 className='chide'>{opportunity.subHeading}</h4>
				<p className='cactive'>{opportunity.description}</p>
				<ul className='cactive ag_oppbullets'>
					{opportunity.details.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<a href='javascript:;' className='ag_toggle read_more'>
					Read More
				</a>
			</div>
		</div>
	));
};

export default Opportunities;
