import reset from "style/reset.js";
import { Global } from "@emotion/react";

import Header from "components/header/Header";
import UserInput from "components/body/UserInput";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <UserInput />
    </>
  );
}

export default App;
