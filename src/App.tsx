import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RootRouter } from "./router";

export const ContextThema = createContext<{
  isThema: boolean;
  setIsThema: (value: boolean) => void;
}>({
  isThema: false,
  setIsThema: () => {},
});

function App() {
  const [isThema, setIsThema] = useState(false);

  return (
    <ContextThema.Provider
      value={{
        isThema: isThema,
        setIsThema: setIsThema,
      }}
    >
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ContextThema.Provider>
  );
}

export default App;
