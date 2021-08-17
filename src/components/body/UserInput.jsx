import Timer from "common/UTCTimer";
import SortedOutput from "common/SortedOutputBox";
import styled from "@emotion/styled";

const UserInput = () => {
  let timeout = setTimeout(() => alert("hello"), 3000);
  return (
    <UserInputLayout>
      <Timer/>
      <UserInputBox />
      <UserInputSubmitButton>Enter</UserInputSubmitButton>
      <SortedOutput />
      <SortedOutput timeout/>
      <Timer />
    </UserInputLayout>
  );
};

const UserInputLayout = styled.div`
  width: 650px;
  margin: auto;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
  padding: 60px;
  color: rgb(30, 29, 41);
  background: rgb(255, 255, 255);
`;

const UserInputBox = styled.input`
  width: 100%;
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
