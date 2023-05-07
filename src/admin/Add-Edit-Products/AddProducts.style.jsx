import styled, { css } from "styled-components";
import { Button, H3 } from "../../globalStyles/Global.styles";
import { RiEdit2Fill } from "react-icons/ri";
const inputStyles = css`
  padding: 7px 15px;
  border-radius: 5px;
  border: 1px solid #999;
  &:focus {
    outline: none;
  }
`;
export const AddEditProductsSection = styled.section``;
export const Wrapper = styled.div``;
export const Title = styled(H3)`
  margin-bottom: 2.3rem;
  font-size: 1.3rem;
`;
export const Form = styled.form``;
export const Div = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  & > div {
    width: 50%;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  ${inputStyles}
`;
export const Select = styled.select`
  ${inputStyles}
`;
export const Option = styled.option``;
export const Label = styled.label`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;
export const SubmitBtn = styled(Button)`
  margin-top: 2rem;
  @media (max-width: 576px) {
    width: 100%;
    padding: 10px 18px;
  }
`;
export const EditImageContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
 `;
export const UploadBtn = styled(Button)`
  width: fit-content;
  padding: 8px 10px;
  font-size: 0.9rem;
  background-color: #fff;
  color: ${props => props.theme.colors.primaryColor};
  border: 1px dotted ${props => props.theme.colors.primaryColor};
  font-weight: 600;
  @media (max-width: 576px) {
    width: fit-content;
    padding: 6px 10px;
  }
`;
export const EditIcon = styled(RiEdit2Fill)`
  color: ${props => props.theme.colors.primaryColor};
  margin-right: 0.5rem;
`;
export const ProductImage = styled.img`
  width: 40%;
  border: 1px solid #999;
  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 1.3rem;
  }
`;
