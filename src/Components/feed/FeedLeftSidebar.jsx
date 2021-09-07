import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import FeedSidebarProfile from "./FeedSidebarProfile";
import FeedSiderbarHashtags from "./FeedSiderHashtags";

export default class FeedLeftSidebar extends Component {
  render() {
    return (
      <BrowserRouter>
        <FeedSidebarProfile userID={"123123"} />
        <FeedSiderbarHashtags />
      </BrowserRouter>
    );
  }
}
