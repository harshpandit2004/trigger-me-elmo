import React from "react";

export default function Preview({ image }) {
  return (
    <div>
      {image.preview && (
        <img src={image.preview} alt="preview" width="100" height="100" />
      )}
      <hr></hr>
    </div>
  );
}
