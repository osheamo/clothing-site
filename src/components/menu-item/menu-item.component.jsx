import React from "react";

import Content from "../content/content.component";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content title={title} />
  </div>
);

export default MenuItem;
