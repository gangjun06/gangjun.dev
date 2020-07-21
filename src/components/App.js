import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";

const App = (props) => {
  return (
    <>
      <Navbar />
      {/* <div className="container mx-auto mt-8"> */}
      <div>{props.children}</div>
      <div className="text-center py-4 w-full">&copy;2020. GangjunDev</div>
    </>
  );
};

export default withRouter(App);
