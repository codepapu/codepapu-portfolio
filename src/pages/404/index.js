import React, { useEffect } from "react";
import "./style.css";

export const PageNotFound = () => {
  return (
    <div class="custom-404-site">
      <div class="custom-404-sketch">
        <div class="custom-404-bee-sketch custom-404-red"></div>
        <div class="custom-404-bee-sketch custom-404-blue"></div>
      </div>

      <h1 class="custom-404-title">
        404:
        <small>Players Not Found</small>
      </h1>
    </div>
  );
};
