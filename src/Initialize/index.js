import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';
import SignOut from '../views/SignOut';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App container">
      {user ? (
        <>
          <Navigation />
          <Routes />
          <SignOut />
        </>
      ) : (
        <>
          <Navigation />
          <Routes />
          <SignIn user={user} />
        </>
      )}
    </div>
  );
}

export default Initialize;
