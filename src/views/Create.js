import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import ProjectForm from '../components/ProjectForm';
import SignIn from './SignIn';
import SignOut from './SignOut';

export default function Create() {
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
    <div>
      <h1>Create</h1>
      {user ? (
        <>
          <ProjectForm />
          <SignOut />
        </>
      ) : (
        <>
          <SignIn user={user} />
        </>
      )}
    </div>
  );
}
