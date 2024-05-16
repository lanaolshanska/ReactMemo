import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

function PostList({ isModalVisible, onCloseModal }) {
  const url = "http://localhost:8080/";
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(url + "posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  function addNewPostHandler(newPost) {
    fetch(url + "posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [...existingPosts, newPost]);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <NewPost onClose={onCloseModal} onAddNewPost={addNewPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} text={post.text} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </>
      )}
      {isLoading && <p>Loading posts...</p>}
    </>
  );
}

export default PostList;
