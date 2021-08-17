import { useReducer } from "react";
import styled from "@emotion/styled";

import UserInput from "components/body/UserInput";
import Timer from "common/Timer";
import SortedOutputs from "components/body/SortedOutputs";

import { GlobalContext } from "utils/context/context.js";
import sortReducer from "utils/context/sortReducer.js";

const initialGlobalState = {
  inputString: "",
  inputNumbers: [],
};

const MainPage = () => {
  const [globalState, globalDispatch] = useReducer(
    sortReducer,
    initialGlobalState
  );

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      <MainPageLayout>
        <Timer timeZone={"kor"} />
        <UserInput />
        <SortedOutputs />
        <Timer />
      </MainPageLayout>
    </GlobalContext.Provider>
  );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 650px;
  margin: auto;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
  padding: 60px;
  color: rgb(30, 29, 41);
  background: rgb(255, 255, 255);
`;

export default MainPage;
