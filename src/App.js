import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS1", body: "description1",},
    {id: 2, title: "JS2", body: "description2",},
    {id: 3, title: "JS3", body: "description3",},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={"Посты постики"}/>
    </div>
  );
}

export default App;
