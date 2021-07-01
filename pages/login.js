import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { magic } from '../lib/magic';
import EmailForm from '../components/email-form';
import SocialLogins from '../components/social-logins';
import withSession from '../lib/session'

const Login = () => {
  const [disabled, setDisabled] = useState(false);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) {
        Router.push('/profile');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
    <div className='login'>
      <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
      <SocialLogins onSubmit={handleLoginWithSocial} />
      <style jsx>{`
        .login {
          max-width: 20rem;
          margin: 40px auto 0;
          padding: 1rem;
          border: 1px solid #dfe1e5;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0px 0px 6px 6px #f7f7f7;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Login;

export const getServerSideProps = withSession(async function({req, res, ...context}) {  

  // Check if the user is logged in. If so go to their profile
  const user = req.session.get('user')
  if (user != null) {
      return {
          redirect: {
              destination: '/profile',
              permanent: false,
          }
      }
  }

  return {
      props: {
      }
  }
})
