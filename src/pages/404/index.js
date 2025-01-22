import React, { useEffect } from "react";
import "./style.css";

export const PageNotFound = () => {
  return (
    <div className="custom-404-site">
      <div className="custom-404-sketch">
        <div className="custom-404-bee-sketch custom-404-red"></div>
        <div className="custom-404-bee-sketch custom-404-blue"></div>
      </div>

      <h1 className="custom-404-title">
        404:
        <small>Players Not Found</small>
      </h1>
    </div>
  );
};
