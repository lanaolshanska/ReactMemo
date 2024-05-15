import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" required rows={3} onChange={props.onTextChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={props.onAuthorChange} required />
      </p>
    </form>
  );
}

export default NewPost;
