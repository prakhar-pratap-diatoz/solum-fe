import Router from "./router";
import GlobalStyle from "./design-system/theme/globalStyle";
import "./App.scss";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
