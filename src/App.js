import axios from "axios";
import { useState, useEffect } from 'react';
import Input from "./components/Input";


const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [post, setPost] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []) //empty [] as second argument to prevent rerender due to no dependencies

  const createPost = () => {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  const updatePost = () => {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post.",
      }) //JSON API successfully sends us our put request as a response
      .then((response) => {
        setPost(response.data);
      });
  }

  const deletePost = () => {
    axios.delete(`${baseURL}/1`).then(() => { //This then is not required, but ensures request was resolved
      alert("Post deleted!");
      setPost(null);
    });
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";


  return (
    <div className="App">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={createPost}>Create Post</button>
          <button onClick={updatePost}>Update Post</button>
          <button onClick={deletePost}>Delete Post</button>
        </>
      )}
      <Input />
    </div>
  );
}

export default App;
