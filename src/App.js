import axios from "axios";
import { useState, useEffect } from 'react';
import Input from "./components/Input";


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setPost(response.data);
    });
  }, []) //empty [] as second argument to prevent rerender due to no dependencies


  return (
    <div className="App">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      <Input/>
    </div>
  );
}

export default App;
