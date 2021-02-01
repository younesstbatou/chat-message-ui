import React from "react";

class ShortWhiteBar extends React.Component {
  render() {
    return (
      <div className="px-2 my-1.5">
        <div className="px-4 py-1.5 bg-white rounded-lg flex justify-between border border-gray-300 text-gray-600">
          <div className="flex">
            <i className="pt-1.5 fas fa-angle-down text-blue-500" />
            <div className="pl-2">My chats</div>
          </div>
          <div className="font-semibold">4</div>
        </div>
      </div>
    );
  }
}

export default ShortWhiteBar;
