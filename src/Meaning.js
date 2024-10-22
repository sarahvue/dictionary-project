import React from "react";
import Synonyms from "./Synonyms";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>

      {props.meaning.example && <p>Example: {props.meaning.example}</p>}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
