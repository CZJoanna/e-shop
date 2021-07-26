import React from "react";

export const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item`}>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Hshop now</span>
    </div>
  </div>
);