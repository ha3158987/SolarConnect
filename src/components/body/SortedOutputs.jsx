import { useContext } from "react";

import SortedOutputBox from "common/SortedOutputBox";

import { GlobalContext } from "utils/context/context.js";

const SortedOutputs = () => {
  const { globalState } = useContext(GlobalContext);
  const { inputNumbers, isTimeUp } = globalState;

  return (
    <>
      {inputNumbers && (
        <>
          <SortedOutputBox numbers={inputNumbers} direction={"ascending"} />
          <SortedOutputBox
            numbers={isTimeUp && inputNumbers}
            direction={"descending"}
          />
        </>
      )}
    </>
  );
};

export default SortedOutputs;
