import React, { useState, useEffect } from "react";
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
  FormGroup,
} from "./LoginSignup.style";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { setDoc, doc, serverTimestamp} from "firebase/firestore";
import {auth, storage, db} from '../../firebase.config';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword (auth, email, password);
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on((error) => {
        toast.error(error.message);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          })
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            isAdmin: false,
            photoURL: downloadURL,
            timeStamp: serverTimestamp()
          })
        })
      });
      setLoading(false);
      toast.success('Account created successfully');
      navigate('/login');

    } catch(error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
    setEmail("");
    setPassword("");
    setUsername("");
    setFile("");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <PageTitle title="Signup">
      <Section>
        <MainContainer>
        <Loading loading={loading}>
        <FormWrapper>
            <FormTitle>Signup</FormTitle>
            <Form onSubmit={signUp}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </FormGroup>
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
              <div className="form-group">
                <Input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <SubmitBtn type="submit">Create an account</SubmitBtn>
              <P>
                Already have an account? <Link to="/login">Login</Link>
              </P>
            </Form>
          </FormWrapper>
        </Loading>
        </MainContainer>
      </Section>
    </PageTitle>
  );
};

export default Signup;
