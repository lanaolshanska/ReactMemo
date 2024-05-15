import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ data, isModalVisible, onCloseModal }) {
  const [posts, setPosts] = useState(data);

  function addNewPostHandler(newPost) {
    setPosts((existingPosts) => [...existingPosts, newPost]);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <NewPost onClose={onCloseModal} onAddNewPost={addNewPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} text={post.text} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
