import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  clickMeBtn() {
    document.getElementById("para").removeAttribute("id", "para");
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.clickMeBtn}>
          Click Me
        </button>
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      </div>
    );
  }
}

export default App;
