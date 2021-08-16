import { useState } from "react";
import styled from "@emotion/styled";

const UserInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleEnterButtonClick = () => {
    setInputValue("");
  };

  return (
    <UserInputLayout>
      <UserInputBox value={inputValue} onChange={handleInputChange} />
      <UserInputEnterButton onClick={handleEnterButtonClick}>
        Enter
      </UserInputEnterButton>
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

const UserInputEnterButton = styled.button`
  width: 20%;
  height: 40px;
  margin: 1rem;
  cursor: pointer;
  border: 1px solid black;
`;

export default UserInput;
