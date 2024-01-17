import Layout from '../../layouts';
import { useApp } from '../../context/useApp';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Section, Wrapper, Button, Grid, Col } from '../../components/content';

export default function SignUp() {
  const { loggedIn, setLoggedIn } = useApp();
  const navigate = useNavigate();

  if (loggedIn) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <Layout>
      <Section className="section__sign-up py-2">
        <h2 className="text-center pb-2">Sign Up</h2>

        <Wrapper className="text-center">
          <Grid className="justify-center">
            <Button
              onClick={() => {
                setLoggedIn(true);
                navigate('/dashboard');
              }}
              type="button"
              className="btn"
            >
              <span className="text">Sign Up</span>
            </Button>

            <NavLink className="link link-primary" to="/sign-in">
              Sign In
            </NavLink>
          </Grid>
        </Wrapper>
      </Section>
    </Layout>
  );
}
