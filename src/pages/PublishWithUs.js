import NewsLetter from "../components/global/NewsLetter";

import SubHeader from "../components/global/SubHeader";
import PublishWithUsComponent from "../components/publishWithUs/PublishWithUsComponent";
import Scope from "../components/publishWithUs/Scope";
import MeghaJournals from "../components/publishWithUs/MeghaJournals";

import { Heading } from "../components/publishWithUs/data";

function PublishWithUs() {
  return (
    <>
      <main className="main">
        <SubHeader title={Heading.PUBLISH_WITH_US} />

        <div className="content-area">
          <div className="container">
            <PublishWithUsComponent />
            <Scope />
            <MeghaJournals />
          </div>
        </div>
      </main>
      {/* NewsLetter Start */}
      <NewsLetter />
      {/* Footer Redline Start */}
    </>
  );
}

export default PublishWithUs;
