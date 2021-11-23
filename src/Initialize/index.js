import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import Navbar from '../components/Navbar';
import Routes from '../routes';
import SignIn from '../views/SignIn';

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
          <Navbar />
          <Routes user={user} />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
