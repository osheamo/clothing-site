import React from "react";
import { withRouter} from 'react-router-dom';

import Content from "../content/content.component";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item`} 
  onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content title={title} />
  </div>
);

export default withRouter(MenuItem);
