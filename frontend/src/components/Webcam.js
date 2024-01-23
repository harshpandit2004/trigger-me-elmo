import React from "react";
import Webcam from "react-webcam";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useRef, useState, useCallback } from "react"; // import useRef

export default function CustomWebcam({ cameraStatus, setCameraStatus }) {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container">
      <FormControlLabel
        control={
          <Switch
            label="Label"
            onChange={() => {
              setCameraStatus(!cameraStatus);
            }}
          />
        }
        label="Toggle Camera"
        labelPlacement="bottom"
      />

      <br />
      {cameraStatus ? (
        imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <>
            <Webcam height={600} width={600} ref={webcamRef} />
            <div className="btn-container">
              <button onClick={capture}>Capture photo</button>
            </div>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
}
