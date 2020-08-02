import React, { Component } from "react";
import { connect } from "react-redux";
import Key from "../Key/Key";
//import TextArea from "../TextArea/TextArea";
import ReactDOM from "react-dom";

class Text extends Component {
  keyRef = React.createRef();

  componentDidMount() {
    //document.addEventListener("keypress", this.handleKey);
    console.log("props on mount in Text.js", this.props);
    // const node = ReactDOM.findDOMNode(this);
    // console.log("DOMNODE inside of KEY.js", this.node);
  }

  state = {
    index: 0,
    class: "poop",
  };
  Click = () => {
    console.log("REF", this.name);
  };
  handleKey = (event) => {
    console.log("I just pressed", event);
    if (event.key === this.props.letters[this.state.index]) {
      this.props.dispatch({
        type: "CHECK_KEY",
        payload: event.key,
      });
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  render() {
    return (
      <>
        <input
          type="text"
          ref={(input) => {
            this.name = input;
          }}
        />

        <input onClick={this.Click} type="submit" value="submit" />
        {this.props.letters.map((key, index) => {
          return <div></div>;
        })}
      </>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    letters: store.testData,
  };
};
export default connect(mapStateToProps)(Text);
