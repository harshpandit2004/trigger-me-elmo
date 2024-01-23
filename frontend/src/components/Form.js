import React from "react";

export default function ImgForm({ handleFileChange, handleSubmit, status }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
}
