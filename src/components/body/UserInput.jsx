import { useContext } from "react";
import styled from "@emotion/styled";
import { GlobalContext } from "utils/context/context.js";

const UserInput = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  const handleInputChange = ({ target: { value } }) => {
    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputValue: value,
      },
    });
  };

  const handleEnterButtonClick = () => {
    //inputData로 계산하는 로직

    //인풋창 reset
    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputValue: "",
      },
    });
  };

  return (
    <UserInputLayout>
      <UserInputBox
        value={globalState.inputValue}
        onChange={handleInputChange}
      />
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
