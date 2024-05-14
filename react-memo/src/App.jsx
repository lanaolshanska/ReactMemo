import PostList from "./components/PostList";
import "./App.css";

const posts = [
  { author: "TestAuthor", text: "text" },
  { author: "TestAuthor2", text: "text2" },
  { author: "TestAuthor3", text: "text3" },
  { author: "TestAuthor4", text: "text4" }
];

function App() {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}

export default App;
