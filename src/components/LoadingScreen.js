import React from "react";

const LoadingScreen = ({ loading }) => {
  const loadingClass = loading ? "loading-screen--loading" : "";
  return (
    <div className={`loading-screen ${loadingClass}`}>
      <div className="loader"/>
      <p>Jeszcze chwilka..</p>
    </div>
  );
};
export default LoadingScreen;
