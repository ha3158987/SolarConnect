import styled from "@emotion/styled";

const UserInput = () => {
  return (
    <UserInputLayout>
      <UserInputBox />
      <UserInputSubmitButton>Enter</UserInputSubmitButton>
    </UserInputLayout>
  );
};

const UserInputLayout = styled.div`
  display: flex;
  width: 800px;
  border: 1px solid black;
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
