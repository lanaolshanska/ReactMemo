import PostList from "./components/PostList";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

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
        <PostList isModalVisible={isModalVisible} onCloseModal={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
