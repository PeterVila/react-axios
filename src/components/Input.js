import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Input() {
  const [keywords, setKeywords] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  async function fetchData() {
    await axios.get(baseURL + keywords).then(response => {
      setFetchedData(response.data);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            placeholder="Please enter a number"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <input
            type="submit"
          ></input>
        </div>
        { fetchedData &&
          <>
            <h1>{fetchedData.title}</h1>
            <p>{fetchedData.body}</p>
          </>
        }
      </form>
    </div>
  );
}
