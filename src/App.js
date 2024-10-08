import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="text-center mt-4">Dictionary</h1>
          <p className="text-center">Find the definition of a word.</p>
          <Dictionary />
        </main>
        <footer className="text-center appFooter">
          Coded by Sarah. Open sourced{" "}
          <a href="https://github.com/sarahvue/dictionary-project">here</a> and
          hosted on{" "}
          <a href="https://smv-dictionary.netlify.app/" target="blank">
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
