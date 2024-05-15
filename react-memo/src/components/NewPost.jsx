import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onClose, onAddNewPost }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function textChangeHandler(event) {
    setText(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      text: text,
      author: author,
    };
    onAddNewPost(postData);
    onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" rows={3} onChange={textChangeHandler} required />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={authorChangeHandler} required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
