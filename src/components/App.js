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
      <div className="container mx-auto mt-8" style={{ minHeight: "80vh" }}>
        {props.children}
      </div>
      <div className="text-center py-4 w-full">&copy;2020. GangjunDev</div>
    </>
  );
};

export default withRouter(App);
