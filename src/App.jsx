import reset from "style/reset.js";
import { Global } from "@emotion/react";

import MainPage from "components/pages/MainPage";

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <MainPage />
    </>
  );
};

export default App;
