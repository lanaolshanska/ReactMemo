import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList(props) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function onTextChangeHandler(event){
    setText(event.target.value);
  }

  function onAuthorHandler(event){
    setAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onTextChange={onTextChangeHandler} onAuthorChange={onAuthorHandler}/>
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
