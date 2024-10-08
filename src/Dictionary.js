import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleReponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ao845a73f82d076c60a25fbb55dt1569";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleReponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="d-flex justify-content-center mt-3">
        <input
          type="search"
          placeholder="Enter in a word"
          onChange={handleKeywordChange}
        ></input>
        <input type="submit" value="Define" className="ms-2"></input>
      </form>
      <div className="mt-3">
        <Results results={results} />
      </div>
    </div>
  );
}
