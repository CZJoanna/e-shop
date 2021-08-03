import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/homepage";

import ShopPage from "./pages/shop-page/shoppage";

import SignInUpPage from "./pages/sign-inup";

import Header from "./components/header";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/signin" component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
