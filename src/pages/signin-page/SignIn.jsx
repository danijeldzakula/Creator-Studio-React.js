import Layout from '../../layouts';
import { useApp } from '../../context/useApp';
import { Navigate, useNavigate, NavLink } from 'react-router-dom';
import { Section, Wrapper, Button, Grid, Col } from '../../components/content';

export default function SignIn() {
  const { loggedIn, setLoggedIn } = useApp();
  const navigate = useNavigate();

  if (loggedIn) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <Layout>
      <Section className="section__sign-in py-2">
        <h2 className="text-center pb-2">Sign In</h2>

        <Wrapper className="text-center">
          <Grid className="justify-center">
            <Col>
              <Button
                onClick={() => {
                  setLoggedIn(true);
                  navigate('/dashboard');
                }}
                type="button"
                className="btn"
              >
                <span className="text">Sign In</span>
              </Button>
            </Col>

            <Col>
              <NavLink className="link link-primary" to="/sign-up">
                Sign Up
              </NavLink>
            </Col>
          </Grid>
        </Wrapper>
      </Section>
    </Layout>
  );
}
