import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import ApNavbar from '../components/ApNavbar';
import Routes from '../routes';
import SignIn from '../views/SignIn';
import SignOut from '../views/SignOut';
import firebaseConfig from '../api/apiKeys';

function Initialize() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        if (userInfoObj.uid === firebaseConfig.adminUser) {
          setAdmin(userInfoObj);
        }
      } else if (user || user === null) {
        setUser(false);
        setAdmin(null);
      }
    });
  }, []);

  return (
    <div className="App container">
      {user ? (
        <>
          <ApNavbar />
          <Routes admin={admin} user={user} />
          <SignOut />
        </>
      ) : (
        <>
          <ApNavbar />
          <Routes admin={admin} user={user} />
          <SignIn user={user} />
        </>
      )}
    </div>
  );
}

export default Initialize;
