import parse from "html-react-parser";

const knowledgeData = [
  {
    title: "Presentations",
    imaUrl: "assets/images/blog-1.png",
    description:
      "Short on time but high on curiosity? Our crisp, <a href='javascript:;'>expert-led presentations</a> will get you up to speed in no time",
  },
  {
    title: "Videos",
    imaUrl: "assets/images/blog-2.png",
    description:
      "Enhance your understanding with <a href='javascript:;'>engaging video content.</a>It explains Aakashganga lucidly.",
  },
  {
    title: "Blogs",
    imaUrl: "assets/images/blog-3.png",
    description:
      "Looking for a good read? <a href='javascript:;'>Our blogs are a treasure trove of insights,</a> tips, and the latest buzz in scholarly publishing.",
  },
  {
    title: "FAQs",
    imaUrl: "assets/images/blog-4.png",
    description:
      "Got questions? We've got answers. <a href='javascript:;'>The FAQs section</a> is your go-to guide for all things Aakashganga.",
  },
];

const UnlockKnowledge = () => {
  return knowledgeData.map((item) => (
    <div className="col-xl-6 col-lg-6 col-sm-6">
      <div className="ag_resourcehub_box aos-init" data-aos="zoom-in-up">
        <img src={item.imaUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{parse(`${item.description}`)}</p>
      </div>
    </div>
  ));
};

export default UnlockKnowledge;
