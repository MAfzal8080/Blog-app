import React from "react";
import Blogs from "./Blogs";

export default function Home(props) {
  const {showAlert} = props;
  return (
    <div className="container">
      
      <Blogs showAlert = {showAlert} />
    </div>
  );
}
