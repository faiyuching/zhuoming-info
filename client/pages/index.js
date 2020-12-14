import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h2>You are signed in</h2>
  ) : (
    <h2>You are NOT signed in</h2>
  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = buildClient(context);
  const { data } = await client.get('/api/user/currentuser');

  return data;
};

export default LandingPage;
