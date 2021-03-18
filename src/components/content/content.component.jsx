import React from 'react';

import './content.styles.scss';

const Content = ({title}) => (
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
)

export default Content;