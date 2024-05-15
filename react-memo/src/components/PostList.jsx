import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList(props) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  function onTextChangeHandler(event) {
    setText(event.target.value);
  }

  function onAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function closeModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={closeModalHandler}>
          <NewPost
            onTextChange={onTextChangeHandler}
            onAuthorChange={onAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {props.posts.map((post) => (
          <Post author={post.author} text={post.text} />
        ))}
        <Post author={author} text={text} />
      </ul>
    </>
  );
}

export default PostList;
