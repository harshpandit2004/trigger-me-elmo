import React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Title() {
  return (
    <div>
      <h1>Trigger Me Elmo</h1>
      <h3>
        World's second
        <Tooltip title="first one was built by michaelreeves" placement="top">
          *
        </Tooltip>{" "}
        best race and ethnicity educator
      </h3>
    </div>
  );
}
