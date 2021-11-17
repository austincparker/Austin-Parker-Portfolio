import React from 'react';
import { signOutUser } from '../api/auth';

export default function SignOut() {
  return (
    <div>
      <button type="button" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
}
