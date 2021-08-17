import { useReducer } from "react";

import Header from "components/header/Header";
import UserInput from "components/body/UserInput";
import SortedOutputs from "components/body/SortedOutputs";

import { GlobalContext } from "utils/context/context.js";
import sortReducer from "utils/context/sortReducer.js";

const initialGlobalState = {
  inputValue: "",
};

const MainPage = () => {
  const [globalState, globalDispatch] = useReducer(
    sortReducer,
    initialGlobalState
  );

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      <Header />
      <UserInput />
      <SortedOutputs />
    </GlobalContext.Provider>
  );
};

export default MainPage;
