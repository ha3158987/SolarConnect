import { useContext } from "react";
import styled from "@emotion/styled";

import { GlobalContext } from "utils/context/context.js";

const UserInput = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  const handleInputChange = ({ target: { value } }) => {
    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputString: value,
      },
    });
  };

  const handleEnterButtonClick = () => {
    const inputNumbers = convertStrToNumberArr(globalState.inputString);
    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputNumbers: inputNumbers,
      },
    });

    resetInputData();
  };

  const convertStrToNumberArr = (string) => {
    const parsedArr = string.split(",");
    const numberArr = parsedArr.map((str) => Number(str));
    return numberArr;
  };

  const resetInputData = () => {
    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputString: "",
      },
    });
  };

  return (
    <UserInputLayout>
      <UserInputBox
        value={globalState.inputString}
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
  width: 100%;
  margin: 1rem;
`;

const UserInputBox = styled.input`
  width: 80%;
  height: 40px;
  margin-right: 1.5rem;
  border: none;
  border-bottom: 1px solid black;
`;

const UserInputEnterButton = styled.button`
  width: 20%;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;
`;

export default UserInput;
