import React from 'react';

import {ReactComponent as Logo} from '../assets/diamond.svg'

import './header.css';
import { connect } from "react-redux";


import { Link } from "react-router-dom";
import { selecthidden } from "../redux/cart/cart-selectors";
import { selectCurrentUser } from "../redux/user.reducer/user.selectors";
import { signOutStart } from "../redux/user.reducer/user-action";
import  ShopCart  from "./shoppinbag.jsx";
import  CartDropDown  from "./cart-dropdown";
import { HeaderContainer,OptionsContainer,OptionLink,LogoContainer,NameContainer,OptionDiv } from "./header.styles";

const Header = ({ currentUser,hidden,signOut}) => {

  return(
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
     </LogoContainer>
      {currentUser ? (
          <NameContainer>{currentUser.displayName}</NameContainer>

        ) :<div></div>}
      
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() =>signOut()}>
            SIGN OUT</OptionDiv>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <ShopCart/>
        </OptionsContainer>
      { hidden? null: <CartDropDown/>}
    </HeaderContainer>
  )
        }

  const mapStateToProps = (state) =>({

    currentUser : selectCurrentUser(state),
    hidden : selecthidden(state)
  });
  
  const dispatchToProps = dispatch =>({
    signOut : ()=>dispatch(signOutStart())
  })
  
  export default connect(mapStateToProps,dispatchToProps)(Header);