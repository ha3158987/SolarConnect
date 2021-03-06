import React, { useState } from "react";
import { useContext } from "react";
import { numValidation } from "utils/NumberValidatior";
import styled from "@emotion/styled";

import { GlobalContext } from "utils/context/context.js";

const UserInput = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  const initialError = {
    errorMsg: "",
  };
  const [errors, setErrors] = useState(initialError);

  const checkValidation = (value) => {
    setErrors({
      ...errors,
      errorMsg: numValidation(value).message,
    });
  };

  const handleInputChange = ({ target: { value } }) => {
    checkValidation(value);

    globalDispatch({
      type: "SET_INPUT_VALUE",
      payload: {
        inputString: value,
      },
    });
  };

  const handleEnterButtonClick = () => {
    const inputNumbers = convertStrToNumberArr(globalState.inputString);

    setTimeout(() => {
      globalDispatch({
        type: "SET_INPUT_VALUE",
        payload: {
          isTimeUp: true,
        },
      });
    }, 3000);

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

  // const checkValidation = (e) => {
  //   const { name } = e.target;
  //   console.log(name);

  //   switch (name) {
  //     case "inputValue":
  //       setErrors({
  //         ...errors,
  //         [name]: numValidation(globalState.inputValue).message,
  //       });
  //       return false;
  //     default:
  //       <ErrorMessage>입력 오류 메시지 정보가 없습니다.</ErrorMessage>;
  //   }
  // };

  return (
    <>
      <UserInputLayout>
        <UserInputBox
          value={globalState.inputString}
          onChange={handleInputChange}
          placeholder=" 입력양식 : 11,7,32,4,"
          type="text"
          name="inputValue"
          onBlur={checkValidation}
        />

        <UserInputEnterButton onClick={handleEnterButtonClick}>
          Enter
        </UserInputEnterButton>
      </UserInputLayout>
      {errors.errorMsg && <ErrorMessage>{errors.errorMsg}</ErrorMessage>}
    </>
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
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
`;

const UserInputEnterButton = styled.button`
  width: 20%;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;
`;

const ErrorMessage = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: left;
  color: red;
  background: rgb(255, 255, 255);
`;

export default UserInput;
