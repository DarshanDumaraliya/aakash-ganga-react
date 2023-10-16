import parse from "html-react-parser";

const meghaJournalOpenScienceData = [
  {
    description:
      "We think that when knowledge is free to access, it helps creativity, new ideas, and progress. It gets people talking and working together, sharing thoughts and even disagreements. Our goal is to make it easy for scholars to openly communicate and let ideas be judged fairly, no matter where they’re from – everything is open, clear, and fair. We believe that the best path is when everyone involved in sharing research works together in a positive way, following the rules, which benefits everyone.",
  },
  {
    description:
      "The Aakashganga Mega Journals strongly support open science by being open and transparent. We publish single and cross-disciplinary peer reviewed research that brings new knowledge, new ideas, and fresh thinking. Submissions will be open to anyone (we encourage submissions from any grade of researcher), and articles will be judged on merit, not the rank or renown of the author.",
  },
  {
    description:
      "Aakashganga Mega Journals bring several key advantages to the table:",
  },
  {
    description:
      "<strong>Inclusivity:</strong> Regardless of the subject area, Mega Journals welcome research from various fields, ensuring that your work finds a suitable platform regardless of its focus.",
  },
  {
    description:
      "<strong>Diverse Research: </strong>Research: Our journals accommodate a broad spectrum of research topics, encouraging the exchange of ideas among researchers with varied expertise.",
  },
  {
    description:
      "<strong>Rapid Publication:</strong> Research: Our journals accommodate a broad spectrum of research topics, encouraging the exchange of ideas among researchers with varied expertise.",
  },
  {
    description:
      "<strong>Visibility:</strong> With a large and diverse readership, your research gains enhanced visibility and potential for increased citations.",
  },
  {
    description:
      "<strong>Global Readership:</strong>Your work is accessible to researchers, students, and professionals from every corner of the globe, fostering a truly international impact.",
  },
  {
    description:
      "<strong>Interdisciplinary Connections:</strong> Mega Journals bridge the gap between disciplines, encouraging collaboration and cross-pollination of ideas that could spark new discoveries.",
  },
  {
    description:
      "<strong>Open Access:</strong> Many Mega Journals operate on open access principles, making your research freely accessible to everyone. This unrestricted access can lead to greater engagement and societal impact.",
  },
];

const MeghaJournalOpenScienceObjectives = () => {
  return (
    <>
      {meghaJournalOpenScienceData.map((item) => (
        <p className="pera-text">{parse(`${item.description}`)}</p>
      ))}
    </>
  );
};

export default MeghaJournalOpenScienceObjectives;
