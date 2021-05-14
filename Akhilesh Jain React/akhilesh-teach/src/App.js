import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person name="Abhishek" marital_status="single ready to mingle">
        <h1>This is my folio</h1>
        Hey all the girls out there i am available now in the market let me if
        any one of you are interested in going out on a date with me. mailMe at:
        iamdam@yahoo.com
      </Person>
    </div>
  );
}

export default App;
