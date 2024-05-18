import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, {loader as loaderPosts} from "./routes/Posts.jsx";
import NewPost, { action as actionCreatePost } from "./components/NewPost.jsx";
import MainLayout from "./routes/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: loaderPosts,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: actionCreatePost,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
