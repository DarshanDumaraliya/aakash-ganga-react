import React from "react";

import { publishingWithAkashGangaList } from "./data";

const PublishWithUsComponent = () => {
  return (
    <>
      <p className="pera-text">
        Aakashganga offers Seven Open Access Digital Mega Journals that publish
        articles with the lowest turn-around time, and one of the lowest APCs.
        In due course we will add University/Institute/Society journals to our
        portfolio. All journals will be in Open Access format only.
      </p>

      <p className="pera-text">
        <strong>Publishing with Aakashganga means:</strong>
      </p>
      <ul className="publish-with-us">
        {publishingWithAkashGangaList.map((item) => (
          <li>{item.data}</li>
        ))}
      </ul>
    </>
  );
};

export default PublishWithUsComponent;
