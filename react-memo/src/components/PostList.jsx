import Post from "./Post";
import classes from "./PostList.module.css"

function PostList(props) {
  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <Post author={post.author} text={post.text} />
      ))}
    </ul>
  );
}

export default PostList;
