const testimonialData = [
	{
		title: "Dr Harivansh Chaturvedi ",
		designation: "Director,",
		subTitle:
			"Birla Institute of Management Technology (BIMTECH), Greater Noida",
		description:
			"I am delighted to know about the launching Aakashganga, an Open Access Journal publishing platform from Bharat. It is a much-needed step for the world. I firmly believe that Open Science and its principles have the potential to catalyse a transformative change in the way we disseminate knowledge and empower researchers across the world. I look forward to seeing an alternative rise from the East. My best wishes for the great success of Aakashganga",
	},
	{
		title: "Amitabh Rajan",
		designation: "Chairman,",
		subTitle: "Reserve Bank of India Services Board",
		description:
			"I am excited about the potential of Aakashganga - the open access journal platform to revolutionize scholarly publishing. Its commitment to affordability, automation, and accessibility positions it as a leader in the field, and I look forward to seeing its continued growth and impact on the global academic community. My best wishes Vivek and Shafina.",
	},
	{
		title: "AMB Rajiv Bhatia",
		designation: "Distinguished Fellow,",
		subTitle: "Foreign Policy Studies Programme",
		description:
			"I am enthused with the vision of Aakashganga. What truly resonates with me is Aakashganga's determination to challenge the status quo. It is charting a course away from Western-dominated, expensive, and sometimes exclusive publishing avenues. In doing so, it is paving the way for a more inclusive and equitable future in academia. It's about levelling the playing field and giving researchers from all corners of the world the opportunity they deserve. Many congratulations Vivek and Shafina.",
	},
	{
		title: "Bharat Wakhlu ",
		designation: "Founder and President,",
		subTitle: "The Wakhlu Advisory",
		description:
			"Hearty Congratulations, Vivek! I’m elated that you bring your experience of many decades, as a leader, publisher, and strategist to Vikramshila. Your aim, to make access to valuable information free, so that great ideas spread rapidly in an interconnected world and cross-fertilizes many more valuable ones, is laudable! I'm confident that the Aakashganga platform will soon become the Open Access platform of choice for institutions, researchers, academics, professionals, and students. I wish you and the team my best! ",
	},
	{
		title: "Padma Bhushan ",
		designation: "Professor",
		subTitle: "Jagdish N. Sheth, Emory University",
		description:
			"My heartfelt congratulations on the launch of this ground-breaking open access journal platform that hails from the heart of innovation, India. I sincerely hope that Aakashganga, under its parent company Vikramshila Research, will work diligently towards transforming the landscape of research coming out of India and the world. I am particularly excited about the automation features that streamline the submission and review processes, saving valuable time for both authors and reviewers. This is especially important in today's fast-paced academic world where research is continuously evolving.",
	},
	{
		title: "Dr Sadhana Rout",
		designation: "Former Principal DG, Publications Division",
		subTitle: " Ministry of I&B, Govt of India ",
		description:
			"Many congratulations to the Founder and the Co-founder of Vikramshila Research.By providing a space for credible research at a reasonable price, you have set out to empower researchers not only in India but also in the developing world. This is a remarkable step towards ensuring that valuable research isn't held hostage by high publication fees.Well done!",
	},
	{
		title: "Dr. Bhimaraya Metri  ",
		designation: "Director,",
		subTitle: "Indian Institute of Management Nagpur ",
		description:
			"Aakashganga is not just a platform; it's a vision. It's a vision that envisions a world where research is accessible, affordable, and free from discrimination. It's a vision that celebrates India's rich intellectual heritage while embracing the global community. I am excited to see Aakashganga's journey unfold and look forward to the positive impact it will undoubtedly have on the world of academic publishing. My congratulations to Vivek and Shafina in bringing this vision to life.",
	},
	{
		title: " Professor (Dr.) Sanjay Srivastava",
		designation: "Managing Director,",
		subTitle: "Manav Rachna Educational Institutions",
		description:
			"All my best wishes to the founders of Aakashganga. What truly sets this platform apart, is its commitment to affordability. With one of the most affordable Article Processing Charges (APCs) in the world, it empowers researchers from diverse backgrounds and institutions to share their work without financial barriers. This not only fosters inclusivity but also ensures that knowledge flows freely across borders, benefiting the global academic community.I hope that Vikramshila Research will write a new chapter in India’s journey of becoming a Knowledge Superpower.",
	},
	{
		title: "Rajesh Chandrashekaran",
		designation: "Professor of Marketing,",
		subTitle: "Rutgers University",
		description:
			"I am delighted to write this note of appreciation and commendation to Aakashganga. For many decades, researchers in India and other parts of the world have helplessly faced barriers of exclusion and regionalism stemming from conditional biases. I hope that Aakashganga will embody the spirit of openness and innovation in the scholarly publishing landscape. India, with its rich history of scientific inquiry and an increasing community of researchers, stands to benefit immensely from Aakashganga. My best wishes to the founders.",
	},
];

const Testimonials = () => {
	return testimonialData.map((item) => (
		<div key={item.title} className='warm-slider-des-wrp'>
			<p>
				<strong>{item.title}</strong>
			</p>
			<p>{item.designation}</p>
			<p className='warm-subtitle'>{item.subTitle}</p>
			<span>{item.description}</span>
		</div>
	));
};

export default Testimonials;
