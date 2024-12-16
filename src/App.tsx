import Router from "./router";
import GlobalStyle from "./design-system/theme/globalStyle";
import { GlobalProvider } from "./Providers/GlobalProvider";
import "./App.scss";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  );
};

export default App;
