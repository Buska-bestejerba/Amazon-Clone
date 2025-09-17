import {useContext} from "react";
import logo from "../../assets/amazon_PNG11.png";
import flag from "../../assets/flag.png";
import {SlLocationPin} from "react-icons/sl";
import {FaSearch} from "react-icons/fa";
import {LiaCartArrowDownSolid} from "react-icons/lia";
import {Link} from "react-router-dom";

import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import {DataContext} from "../DataProvider/DataProvider";

const Header = () => {
  const context = useContext(DataContext) || [
    {basket: [], user: null},
    () => {},
  ];
  const [{basket, user}, dispatch] = context;

  const totalItem = basket?.reduce(
    (amount, item) => amount + (item.amount || 1),
    0
  );

  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
            <SlLocationPin />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <FaSearch size={20} />
        </div>

        {/* Right Side */}
        <div className={classes.order__container}>
          {/* Language Selector */}
          <div className={classes.language}>
            <img src={flag} alt="flag" />
            <select>
              <option value="">EN</option>
            </select>
          </div>

          {/* Account & Lists */}
          <div className={classes.account}>
            <p>Hello, {user ? user.name : "Sign In"}</p>
            <span>Account & Lists</span>
          </div>

          {/* Orders */}
          <Link to="/orders" className={classes.orders}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <LiaCartArrowDownSolid size={35} />
            <span className={classes.cartCount}>{totalItem}</span>
          </Link>
        </div>
      </div>

      {/* Lower Header */}
      <LowerHeader />
    </section>
  );
};

export default Header;
