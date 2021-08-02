import React from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <main className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </main>
    );
  }
}

export default ShopPage;
