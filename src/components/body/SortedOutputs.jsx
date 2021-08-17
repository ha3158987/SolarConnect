import { useContext } from "react";
import styled from "@emotion/styled";

import SortedOutput from "common/SortedOutputBox";

import { GlobalContext } from "utils/context/context.js";

const SortedOutputs = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  console.log(globalState);

  return (
    <>
      <SortedOutput />
      <SortedOutput timeout />
    </>
  );
};

export default SortedOutputs;
