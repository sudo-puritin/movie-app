import React from "react";
import "./Components.css";

const PageHeader = (props) => {
  return (
    <>
      {/* <div className="appBarCover"></div> */}
      <h2 className="pageHeaderTitle">{props.children}</h2>
      <div
        className="pageHeader"
        style={{
          backgroundImage: `url("assets/WallpaperDog-20493433.jpg")`,
        }}
      ></div>
      {/* <div className="appBarFCover"></div> */}
    </>
  );
};

PageHeader.propTypes = {};

export default PageHeader;
