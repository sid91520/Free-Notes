import React from 'react';

function Content({ notes }) {
  return (
    <div>
      <div className='container' style={{ paddingTop: '30px' }}>
        <div className='row'>
          {notes.map((note, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                  <a href={note.pdfLink} className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">Preview</a>
                  <a href={note.pdfLink} className="btn btn-primary mx-2" download>Download</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
