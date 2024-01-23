import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import "./App.css";

function App() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image.data);

    try {
      const response = await fetch("http://127.0.0.1:5000/detect_ethnicity", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(`Dominant Race: ${result.dominant_race}`);
      } else {
        setStatus(`Error: ${response.statusText}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trigger Me Elmo</h1>
        <h3>
          World's second
          <Tooltip title="first one was built by michaelreeves" placement="top">
            *
          </Tooltip>{" "}
          best race and ethnicity educator
        </h3>
        {image.preview && (
          <img src={image.preview} alt="preview" width="100" height="100" />
        )}
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFileChange}></input>
          <button type="submit">Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </header>
    </div>
  );
}

export default App;
