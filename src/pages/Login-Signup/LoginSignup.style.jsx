import styled , {css} from "styled-components";
import {RiEyeFill, RiEyeOffFill} from 'react-icons/ri';
import {
  H3,
  Button,
  TextWrapper,
  BtnLink,
  H2,
} from "../../globalStyles/Global.styles";
const iconStyles = css`
    position: absolute;
    top: 37%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.25rem;
    cursor: pointer;
    z-index: 5;
`;
export const Section = styled.section``;
export const FormWrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  @media (min-width: 992px) {
    width: 50%;
  }
`;
export const FormTitle = styled(H3)`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 40px;
  border-radius: 5px;
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
`;
export const FormGroup = styled.div`
    &:nth-of-type(3) {
        position: relative;
    }
`;
export const Input = styled.input`
  width: 100%;
  padding: 11px 15px;
  border-radius: 5px;
  border: none;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
  &[type="file"] {
    color: #fff;
    cursor: pointer;
  }
`;
export const SubmitBtn = styled(Button)`
  background-color: #fff;
  color: ${(props) => props.theme.colors.primaryColor};
  margin-top: 2rem;
  margin-bottom: 1.7rem;
  font-weight: 600;
  @media (max-width: 576px) {
    margin-top: 1.3rem;
  }
`;
export const P = styled(TextWrapper)`
  font-size: 0.95rem;
  @media (max-width: 576px) {
    font-size: 0.82rem;
  }
`;
export const Link = styled(BtnLink)`
  color: #fff;
`;
export const ShowPassword = styled(RiEyeFill)`
    ${iconStyles}
`;
export const HidePassword = styled(RiEyeOffFill)`
    ${iconStyles}
`
export const LoadingTitle = styled(H2)`
  text-align: center;
  font-size: 1.3rem;
`
