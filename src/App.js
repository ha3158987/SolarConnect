import reset from "style/reset.js";
import { Global } from "@emotion/react";

import UserInput from "components/body/UserInput";

function App() {
  return (
    <>
      <Global styles={reset} />
      <UserInput />
    </>
  );
}

export default App;
