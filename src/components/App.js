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
      <div className="container mx-auto mt-8">{props.children}</div>
      <div
        className="text-center py-4 w-full"
        style={{ position: "absolute", bottom: 0 }}
      >
        &copy;2020. GangjunDev
      </div>
    </>
  );
};

export default withRouter(App);
