import React from "react";
import Avatar from "./Avatar";
import Content from "./Content";

class Member extends React.Component {
  render() {
    return (
      <div className="px-2">
        <div className="flex justify-between py-4 rounded-xl px-4 items-center">
          <div className="flex">
            <Avatar></Avatar>
            <Content></Content>
          </div>
          <div>
            <div className="bg-red-500 w-4 h-4 flex justify-center items-center rounded-full text-white text-xs">
              2
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
