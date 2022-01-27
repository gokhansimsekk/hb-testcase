import Search from "./Search";
import Basket from "./Basket";

import logo from "assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <div className="container">
        <img src={logo} className="header__logo" alt="hepsiburada logo" />
        <Search />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
