import styled from "styled-components";
import { H3 } from "../globalStyles/Global.styles";
const Div = styled.div`
  padding: 50px 0;
  height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Message = styled(H3)``;
const Loading = ({ loading, error, children }) => {
  return (
    <>
      {loading ? (
        <Div>
          <Message>Please Wait Until Loading...</Message>
        </Div>
      ) : error ? (
        <Div>
          <Message>{error}</Message>
        </Div>
      ) : (
        children
      )}
    </>
  );
};
export default Loading;
