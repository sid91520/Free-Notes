import React, { useState } from 'react';

function Upload({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && pdfFile) {
      const pdfLink = URL.createObjectURL(pdfFile); // Create a URL for the uploaded file
      onAddNote({ title, description, pdfLink }); // Pass the note with the PDF link
      setTitle('');
      setDescription('');
      setPdfFile(null);
    }
  };

  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ padding: "75px 20px 25px 10px" }}>
        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#uploadModal">
          Upload Notes
        </button>
      </div>

      {/* Modal for uploading notes */}
      <div className="modal fade" id="uploadModal" tabIndex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="uploadModalLabel">Upload Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="pdfFile" className="form-label">Upload PDF</label>
                  <input type="file" className="form-control" id="pdfFile" accept="application/pdf" onChange={handleFileChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Note</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
