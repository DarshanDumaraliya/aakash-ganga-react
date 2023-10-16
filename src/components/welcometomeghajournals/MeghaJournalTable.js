const meghaJournalTableData = [
  {
    aspect: "Scope",
    megha_journals: "Encompass a wide range of disciplines and topics",
    traditional_journals: "Focus on specific subject areas",
  },
  {
    aspect: "Inclusivity",
    megha_journals: "Welcomes multidisciplinary research submissions",
    traditional_journals: "Specializes in a single field or niche",
  },
  {
    aspect: "Publication Speed",
    megha_journals: "Often features faster review and publication processes",
    traditional_journals: "May have longer review and publication timelines",
  },
  {
    aspect: "Review Process",
    megha_journals:
      "Typically uses Pre as well as post-publication open peer review",
    traditional_journals: "Primarily employs pre-publication peer review",
  },
  {
    aspect: "Accessibility",
    megha_journals: "Emphasizes open access for widespread readership",
    traditional_journals: "May require subscription or purchase for access",
  },
  {
    aspect: "Diversity of Authors",
    megha_journals: "Encourages submissions from researchers of all levels",
    traditional_journals: "May favour established scholars or institutions",
  },
  {
    aspect: "Interdisciplinary Impact",
    megha_journals: "Fosters collaboration and exchange across disciplines",
    traditional_journals: "May have limited cross-disciplinary engagement",
  },
  {
    aspect: "Innovation",
    megha_journals: "Supports unconventional and cutting-edge research",
    traditional_journals: "May be conservative in accepting novel approaches",
  },
  {
    aspect: "Article Selection",
    megha_journals:
      "Focuses on merit of the research rather than author reputation",
    traditional_journals:
      "Can be influenced by author reputation or affiliation",
  },
  {
    aspect: "Publishing Model",
    megha_journals: "Operates on transparent and open publication principles",
    traditional_journals: "Adheres to traditional publication norms",
  },
];

const MeghaJournalTable = () => {
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th className="text-center">Aspect</th>

            <th className="text-center">Mega Journals</th>

            <th className="text-center">Traditional Journals</th>
          </tr>
        </thead>
        <tbody>
          {meghaJournalTableData.map((item) => (
            <tr>
              <td>{item.aspect}</td>
              <td>{item.megha_journals}</td>
              <td>{item.traditional_journals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeghaJournalTable;
