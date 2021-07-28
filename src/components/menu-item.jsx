import React from "react";
import {withRouter} from "react-router-dom";

const MenuItem = ({ number, title, imageUrl, history,match,linkUrl }) => (
  <div className={`menu-item menu-item--${number}`} onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
    <img src={imageUrl} alt="product" className="menu-item__img" />

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);