import { useEffect } from 'react';

const handleGoogleLogin = () => {
  const onSuccess = (response) => {
    // Handle successful response here
    console.log('Google login success', response);
  };

  const onFailure = (error) => {
    // Handle error here
    console.error('Google login failed', error);
  };

  // Check if gapi is loaded
  if (window.gapi && window.gapi.auth2) {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(onSuccess).catch(onFailure);
  } else {
    console.error('gapi.auth2 is not loaded');
  }
};

const GoogleLogin = () => {
  useEffect(() => {
    const loadGapiScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.onload = () => {
          window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
              client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Use your Google client ID
            }).then(resolve);
          });
        };
        document.body.appendChild(script);
      });
    };

    loadGapiScript();
  }, []);

  return (
    <button onClick={handleGoogleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLogin;
