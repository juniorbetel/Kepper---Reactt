import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  function getNote(input) {
    setNote(prevValue => {
      return [...prevValue, input];
    });
  }
  function delItem(id) {
    setNote(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea getNote={getNote} />
      {note.map((note, index) => {
        return (
          <Note
            id={index}
            title={note.title}
            content={note.content}
            delItem={delItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
