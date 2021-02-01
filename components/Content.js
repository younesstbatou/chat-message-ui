import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

class Content extends React.Component {
  render() {
    return (
      <div className="pl-2 text-left">
        <Title></Title>
        <br />
        <Subtitle></Subtitle>
      </div>
    );
  }
}

export default Content;
