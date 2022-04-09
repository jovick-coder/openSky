import React from "react";
import "./LoadingComponent.css";
import loadingImage from "../../assets/images/loading.gif";

function LoadingComponent() {
  return (
    <div className="LoadingComponent">
      <img src={loadingImage} alt="Loading..." />
    </div>
  );
}

export default LoadingComponent;
