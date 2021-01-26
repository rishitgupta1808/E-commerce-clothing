import './App.css';
import React from "react";
import Homepage  from "./pages/homepage.jsx";
import {Route,Switch,Redirect} from 'react-router-dom';
import Shoppage from "./pages/shoppage.jsx";
import Checkout from "./pages/checkout.jsx";
import Header from "./components/header.jsx";
import { Siginout } from "./pages/signinout";
import { auth,registerUser } from "./firebase/firebase.config.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user.reducer/user-action.js";
import { selectCurrentUser } from "./redux/user.reducer/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await registerUser(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
    <Header  />
    <Switch>
    <Route exact path='/' component = {Homepage }/>
    <Route path='/shop/' component = {Shoppage}/>
    <Route exact path='/signin/' render={()=>this.props.currentUser?<Redirect to='/'/>:<Siginout/>}/>
    <Route exact path='/checkout/' component={Checkout}/>
    </Switch>
    </div>

  );
  }
}

const mapStateToProps = (state) =>({  
  currentUser : selectCurrentUser(state)
})


const dispatchToProps = (dispatch) =>({
  setUser :(user)=>(
    dispatch(setCurrentUser(user))
  )
});

export default connect(mapStateToProps,dispatchToProps)(App);

