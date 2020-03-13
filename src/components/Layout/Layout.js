import React from "react";
import "./style.scss";

export default function Layout(props) {
  return (
    <div className="layout">
      <div className="main-container">{props.children}</div>
    </div>
  );
}
