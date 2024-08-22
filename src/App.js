import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Upload from './component/Upload';

function App() {
  const [notes, setNotes] = useState(() => {
    // Load notes from local storage if available
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [
      {
        title: "HTML Interview Question",
        description: "Some quick example text to build on the Interview Question and make up the bulk of the card's content.",
        pdfLink: "/HTML.pdf"
      },
      {
        title: "CSS Interview Question",
        description: "Some quick example text to build on the Interview Question and make up the bulk of the card's content.",
        pdfLink: "/CSS.pdf"
      },
      {
        title: "JavaScript Interview Question",
        description: "Some quick example text to build on the Interview Question and make up the bulk of the card's content.",
        pdfLink: "/JavaScript.pdf"
      },
      {
        title: "React Interview Question",
        description: "Some quick example text to build on the Interview Question and make up the bulk of the card's content.",
        pdfLink: "/React.pdf"
      },
    ];
  });

  const addNote = (note) => {
    const updatedNotes = [...notes, note]; 
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div>
      <Upload onAddNote={addNote} /> 
      <Navbar />
      <Content notes={notes} />
    </div>
  );
}

export default App;
