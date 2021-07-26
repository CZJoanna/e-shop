import React from "react";

export const MenuItem = ({ number , title, imageUrl, size }) => (
  <div className={`menu-item menu-item--${number}`}>
    <img src={imageUrl} alt="product" className="menu-item__img"/>

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);
