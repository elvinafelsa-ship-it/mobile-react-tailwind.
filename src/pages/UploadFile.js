import React, { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);
  const handleUpload = () => {
    if (file) alert("File uploaded: " + file.name);
    else alert("No file selected!");
  };

  return (
    <div className="p-5 pt-10 text-center">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Upload File</h2>
      <input type="file" onChange={handleChange} className="mb-4" />
      <br />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>
      {file && <p className="mt-3">Selected: {file.name}</p>}
    </div>
  );
}

export default UploadFile;