import React from "react";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <img src={imageUrl} alt="" className="collection-item__photo" />
    <div className="collection-item__footer">
      <h3 className="collection-item__name">{name}</h3>
      <h3 className="collection-item__price">{price}</h3>
    </div>
  </div>
);

export default CollectionItem;
