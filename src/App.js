import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInandSignUpPage from './pages/sign-in and sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser}= this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
           setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      this.setState( userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInandSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
