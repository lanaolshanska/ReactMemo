import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} text={post.text} />
          ))}
        </ul>
      ) : (
        <>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </>
      )}
    </>
  );
}

export default PostList;
