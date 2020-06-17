import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <>
      <div className="text-center">
        <Title title="404" text="Page Not Found" />
        <Link
          to="/"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          GoTo Home
        </Link>
      </div>
    </>
  );
};

export default NotMatch;
