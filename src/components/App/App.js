import React, { Component } from "react";
import Text from "../Text/Text";

import "./App.css";
import TextArea from "../TextArea/TextArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Imitate</h1>
        </header>
        <TextArea />
      </div>
    );
  }
}

export default App;
