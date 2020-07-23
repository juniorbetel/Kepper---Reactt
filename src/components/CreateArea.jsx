import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    let { name, value } = event.target;
    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInput}
          value={input.content}
        />
        <button
          onClick={event => {
            props.getNote(input);
            setInput({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
