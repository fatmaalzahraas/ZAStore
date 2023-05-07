import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MainContainer } from "../../globalStyles/Global.styles";
import {
  Section,
  FormWrapper,
  Form,
  Input,
  FormTitle,
  SubmitBtn,
  P,
  Link,
  ShowPassword,
  HidePassword,
} from "./LoginSignup.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase.config';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import Loading from '../../customHooks/Loading';
import GetData from "../../customHooks/GetData";
const FormGroup = styled.div`
  &:nth-of-type(2) {
    position: relative;
  }
`
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {data} = GetData();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      data?.map(el => {
        if (user.uid === el.id) {
          if (el.isAdmin === true) {
            setLoading(false);
             toast.success(`Successfully logged in as admin ${user.displayName}`);
              navigate('/dashboard');
          }
          else {
            setLoading(false);
            toast.success(`Successfully logged in ${user.displayName}`);
            navigate('/checkout');
          }
        }
        return user;
      })
    } catch(error) {
      setLoading(false);
      toast.error(`User Not Found! Please create an account first`);
    }
    setEmail('');
    setPassword('');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <PageTitle title="Login">
      <Section>
        <MainContainer>
          <Loading loading={loading} >
          <FormWrapper>
            <FormTitle>Login</FormTitle>
            <Form onSubmit={signIn}>
              <FormGroup>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <ShowPassword onClick={() => setShowPassword(false)} />
                ) : (
                  <HidePassword onClick={() => setShowPassword(true)} />
                )}
              </FormGroup>
              <SubmitBtn type="submit">Login</SubmitBtn>
              <P>
                Don't have an account?{" "}
                <Link to="/signup">Create an account</Link>
              </P>
            </Form>
          </FormWrapper>
          </Loading>
        
        </MainContainer>
      </Section>
    </PageTitle>
  );
};

export default Login;
