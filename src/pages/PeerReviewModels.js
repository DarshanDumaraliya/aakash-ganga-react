import NewsLetter from "../components/global/NewsLetter";

import { Headings } from "../components/peerReviewModels/data";
import SubHeader from "../components/global/SubHeader";
import PeerTextKinds from "../components/peerReviewModels/PeerTextKinds";
import PeerModelsTypes from "../components/peerReviewModels/PeerModelsTypes";
import PublishingModelDifference from "../components/peerReviewModels/PublishingModelDifference";

function PeerReviewModels() {
  return (
    <>
      <main className="main">
        <SubHeader title={Headings.PEER_REVIEW_MODELS} />

        <div className="content-area">
          <div className="container">
            <PeerTextKinds />
            <div className="register-button">
              <button>Register as a Peer Reviewer</button>
            </div>
            <PeerModelsTypes />
            <PublishingModelDifference />

            <p className="pera-text text-center">
              For more questions on our processes, policies and other aspects,
              please refer to our
              <strong className="underline">FAQ section.</strong>
            </p>
          </div>
        </div>
      </main>
      {/* NewsLetter Start */}
      <NewsLetter />
      {/* Footer Redline Start */}
    </>
  );
}

export default PeerReviewModels;
