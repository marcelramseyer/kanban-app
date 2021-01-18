import React from 'react';
import { socialLogin } from '../firestore/firebaseService';
import { useHistory } from 'react-router-dom';

function SocialLogin() {
  const history = useHistory();
  const handleSocialLogin = async () => {
    await socialLogin();
    history.push('/');
  };
  return (
    <>
      <button type="button" onClick={handleSocialLogin}>
        Login with Google
      </button>
    </>
  );
}

export default SocialLogin;
