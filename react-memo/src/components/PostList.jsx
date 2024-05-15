import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ posts, isModalVisible, onCloseModal }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function onTextChangeHandler(event) {
    setText(event.target.value);
  }

  function onAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <NewPost
            onTextChange={onTextChangeHandler}
            onAuthorChange={onAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post author={post.author} text={post.text} />
        ))}
        <Post author={author} text={text} />
      </ul>
    </>
  );
}

export default PostList;
