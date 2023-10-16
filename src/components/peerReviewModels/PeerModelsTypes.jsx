import React from "react";
import PrePublishingPeerModels from "./PrePublishingPeerModels";
import PostPublishingPeerReviewModel from "./PstPublishingPeerReviewModel";

const PeerModelsTypes = () => {
  return (
    <>
      <p className="pera-text">
        We deeply appreciate the efforts of our Peer Reviewers and value their
        role in shaping the future of research. As a thank you gesture, we
        provide a small honorarium in the form of
        <strong>Mudras</strong> (INR) for every Peer Review undertaken, which is
        deposited in the <strong>Mudra Kosh</strong> (Wallet) in your respective
        account. You may use these Mudras to write a new research article, or
        update an existing article on the platform.
      </p>
      <PrePublishingPeerModels />
      <PostPublishingPeerReviewModel />
    </>
  );
};

export default PeerModelsTypes;
