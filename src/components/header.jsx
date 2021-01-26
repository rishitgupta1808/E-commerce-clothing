import React from 'react';

import {ReactComponent as Logo} from '../assets/diamond.svg'

import './header.css';
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.config.js";

import { Link } from "react-router-dom";
import { selecthidden } from "../redux/cart/cart-selectors";
import { selectCurrentUser } from "../redux/user.reducer/user.selectors";
import  ShopCart  from "./shoppinbag.jsx";
import  CartDropDown  from "./cart-dropdown";

const Header = ({ currentUser,hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
     </Link>
      {currentUser ? (
          <div className="name">{currentUser.displayName}</div>

        ) :<div></div>}
      
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT</div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <ShopCart/>
      </div>
      { hidden? null: <CartDropDown/>}
    </div>
  );

  const mapStateToProps = (state) =>({

    currentUser : selectCurrentUser(state),
    hidden : selecthidden(state)
  });
  
  export default connect(mapStateToProps)(Header);