import React from "react";

import parse from "html-react-parser";

import { PublishingModelDifferenceTableData } from "./data";

const PublishingModelDifference = () => {
  return (
    <div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th className="text-center">
                Pre Publishing Double Anonymous Peer Review
              </th>

              <th className="text-center">Post Publishing Open Peer Review</th>
            </tr>
          </thead>

          <tbody>
            {PublishingModelDifferenceTableData.map((item) => (
              <tr>
                <td>{parse(`${item.pre_publish}`)}</td>
                <td>{parse(`${item.post_publish}`)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublishingModelDifference;
