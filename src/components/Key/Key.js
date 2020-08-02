import React, { Component } from "react";
import { connect } from "react-redux";
import "./Key.css";
import ReactDOM from "react-dom";

class Key extends Component {
  componentDidMount() {
    console.log("props in Key.js on mount", this.props);
    //document.addEventListener("keypress", this.handleKey);
  }
  state = {};

  //   handleKey = (event) => {
  //     const node = ReactDOM.findDOMNode(this);
  //     console.log("DOMNODE inside of KEY.js", this.node);
  //   };

  render() {
    return (
      <>
        <span className={"test"}>{this.props.value}</span>
      </>
    );
  }
}

export default Key;
