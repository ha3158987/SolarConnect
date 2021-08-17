import reset from "style/reset.js";
import { Global } from "@emotion/react";

import Header from "components/header/Header";
import MainPage from "components/pages/MainPage";

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <MainPage />
    </>
  );
};

export default App;
