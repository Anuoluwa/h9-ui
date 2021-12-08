import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  RiUserSettingsFill,
  RiShoppingBag3Fill,
  RiLogoutBoxFill,
} from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import styles from "./index.module.scss";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const SideBar = ({ logout }) => {
  return (
    <div className={styles._}>
      <div className={styles.container}>
        <h4>Dashboard</h4>
        <div className={styles.nav_list}>
          <NavLink
            exact={true}
            to="/subscriptions"
            className={styles.nav_item}
            activeClassName={styles.selected}
          >
            <div className={styles.nav_icon}>
              <AiFillHome className={styles.fill_icon} />
            </div>
            <div className={styles.nav_text}>
              <p>Subscriptions</p>
            </div>
          </NavLink>
          <NavLink
            to="/users"
            className={styles.nav_item}
            activeClassName={styles.selected}
          >
            <div className={styles.nav_icon}>
              <RiShoppingBag3Fill className={styles.fill_icon} />
            </div>
            <div className={styles.nav_text}>
              <p>Customers</p>
            </div>
          </NavLink>
          <NavLink
            to="/vouchers"
            className={styles.nav_item}
            activeClassName={styles.selected}
          >
            <div className={styles.nav_icon}>
              <HiShoppingCart className={styles.fill_icon} />
            </div>
            <div className={styles.nav_text}>
              <p>Vouchers</p>
            </div>
          </NavLink>
          {/* <NavLink
            to="/subscriptions"
            className={styles.nav_item}
            activeClassName={styles.selected}
          >
            <div className={styles.nav_icon}>
              <RiUserSettingsFill className={styles.fill_icon} />
            </div>
            <div className={styles.nav_text}>
              <p>Subscriptions</p>
            </div>
          </NavLink> */}
          <Link
            className={styles.nav_item}
            activeClassName={styles.selected}
            onClick={logout}
          >
            <div className={styles.nav_icon}>
              <RiLogoutBoxFill className={styles.fill_icon} />
            </div>
            <div className={styles.nav_text}>
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(SideBar);
