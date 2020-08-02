import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../Text/Text";
//import "./TextArea.css";

class TextArea extends Component {
  render() {
    return (
      <>
        <pre>
          <Text />
        </pre>
      </>
    );
  }
}

export default TextArea;
