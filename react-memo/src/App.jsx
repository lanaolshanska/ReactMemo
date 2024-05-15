import PostList from "./components/PostList";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

const posts = [
  { author: "TestAuthor", text: "text" },
  { author: "TestAuthor2", text: "text2" },
  { author: "TestAuthor3", text: "text3" },
  { author: "TestAuthor4", text: "text4" },
];

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function openModalHandler() {
    setIsModalVisible(true);
  }

  function closeModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <Header onCreatePost={openModalHandler} />
      <main>
        <PostList posts={posts} isModalVisible={isModalVisible} onCloseModal={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
