import React from "react";

import parse from "html-react-parser";

import PeraTextData from "../global/PeraTextData";

import { peerTextKindOverview, peerTextKinds, peerTextKindNote } from "./data";

const PeerTextKinds = () => {
  return (
    <>
      <PeraTextData data={peerTextKindOverview} />

      <ul>
        {peerTextKinds.map((item) => (
          <li>{parse(`${item.description}`)}</li>
        ))}
      </ul>

      <p className="pera-text italic">{parse(`${peerTextKindNote}`)}</p>

      <p className="pera-text">
        For benefits of Peer Review, please read:{" "}
        <strong className="underline">Reviewer Guidelines</strong>
      </p>
    </>
  );
};

export default PeerTextKinds;
