import styled from "@emotion/styled";
import Timer from "common/UTCTimer";
import SortedOutput from "common/SortedOutputBox";


const UserInput = () => {
  return (
    <>
    <UserInputLayout>
      <Timer></Timer>
      <UserInputBox />
      <UserInputSubmitButton>Enter</UserInputSubmitButton>
      <SortedOutput></SortedOutput>
    </UserInputLayout>
    </>
  );
};

const UserInputLayout = styled.div`
  width: 800px;
  border: 1px solid black;
  margin: auto;
`;

const UserInputBox = styled.input`
  width: 70%;
  height: 40px;
  margin: 1rem;
  border: none;
  border-bottom: 1px solid black;
`;

const UserInputSubmitButton = styled.button`
  width: 20%;
  height: 40px;
  margin: 1rem;
  cursor: pointer;
  border: 1px solid black;
`;

export default UserInput;
