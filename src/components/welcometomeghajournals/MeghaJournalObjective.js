import parse from "html-react-parser";

const meghaJournalsObjectiveData = [
  {
    description: `Aakashganga hosts <strong className="underline">Seven Premium Mega Journals </strong>`,
  },
  {
    description:
      "Our Mega Journals offer researchers an expansive and all-encompassing space to publish their work across a wide range of disciplines. Share your research findings with a global audience, foster interdisciplinary collaborations, and engage with diverse perspectives.",
  },
  {
    description:
      "At the heart of our Mega Journals model lies a philosophy of openness and transparency in publishing. Our platform works on a multidisciplinary, open access approach characterised as having four key characteristics: large size; broad disciplinary scope; a Gold-OA business model; and a Pre-Publishing Double Anonymous and Post Publishing Open Peer-review policy.",
  },
  {
    description:
      "Unlike traditional journals with stringent boundaries, our Mega Journals provide an expansive home for submissions spanning a wide spectrum of thematic interests within the following seven disciplines:",
  },
];

const meghaJournalItems = [
  " Social Sciences",
  " Business and Management",
  " Engineering",
  " Information Technology",
  " Pure Sciences",
  " Ayurveda and Yoga",
];

const MeghaJournalObjective = () => {
  return (
    <>
      {meghaJournalsObjectiveData.map((item) => (
        <p className="pera-text">{parse(`${item.description}`)}</p>
      ))}
      {meghaJournalItems.map((item, index) => (
        <p className="pera-text">
          <span className="red-text">{index + 1}.</span>
          <strong>{item}</strong>
        </p>
      ))}
    </>
  );
};

export default MeghaJournalObjective;
