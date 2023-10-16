import React from "react";

import Title from "../global/Title";
import { Headings } from "./data";

const PrePublishingPeerModels = () => {
  return (
    <>
      <Title title={Headings.PRE_PUBLISHING} className={"large-title"} />

      <Title title={Headings.APR} className={"small-title"} />

      <p className="pera-text">
        To ensure fairness and impartiality, our platform follows a
        double-anonymous review model. This means that both the reviewers and
        authors remain anonymous throughout the review process. Anonymity helps
        eliminate biases that could arise based on the author’s identities,
        affiliations, or previous work. It allows for an objective evaluation of
        the research paper solely on its scientific merits.
      </p>

      <Title title={Headings.APC} className={"small-title"} />

      <p className="pera-text">
        As an open access platform, we follow the{" "}
        <strong>Gold Open Access Model</strong>, in which scholarly articles are
        freely and immediately available to readers without any subscription
        barriers or paywalls. All articles published on the Aakashganga platform
        will be made immediately and openly accessible on the website under the{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="blank"
        >
          <strong className="underline">CC-BY-NC-SA</strong>
        </a>{" "}
        license, allowing anyone with internet access to read, download, share,
        and use the research findings{" "}
        <strong>for personal and non-commercial use.</strong>
      </p>

      <p className="pera-text">
        There is therefore <strong>no embargo period,</strong> and authors
        retain the
        <strong>copyright of their work</strong> when publishing under the Gold
        Open Access model.
      </p>

      <p className="pera-text">
        The APC ensures that we can maintain the integrity of our peer review
        process, enhance the visibility of your published work, and provide
        unrestricted access to your research for the global scientific
        community.
      </p>
    </>
  );
};

export default PrePublishingPeerModels;
