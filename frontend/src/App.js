import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { detect_ethnicity } from "./API/detect_ethnicity";
import Title from "./components/Title";
import "./App.css";
import Preview from "./components/Preview";
import ImgForm from "./components/Form";

function App() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image.data);
    const response = await detect_ethnicity(formData);
    setStatus(response);
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
        <Title />
        <Preview image={image} />
        <ImgForm
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          status={status}
        />
      </header>
    </div>
  );
}

export default App;
