import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";

const App = (props) => {
  if (props.location.pathname === "/") {
    return <div>{props.children}</div>;
  }
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default withRouter(App);
