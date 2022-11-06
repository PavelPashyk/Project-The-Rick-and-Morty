import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getUser } from "./api/auth";
import "./App.css";
import { RootRouter } from "./router";
import { IUser } from "./types/auth";

export const ContextAll = createContext<{
  isThema: boolean;
  setIsThema: (value: boolean) => void;
  isLoadingBlock: boolean;
  setIsLoadingBlock: (value: boolean) => void;
  isErrorValidation: boolean;
  setIsErrorValidation: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
  openName: number;
  setOpenName: (value: number) => void;
}>({
  isThema: true,
  setIsThema: () => {},
  isLoadingBlock: false,
  setIsLoadingBlock: () => {},
  isErrorValidation: false,
  setIsErrorValidation: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
  openName: + "",
  setOpenName: () => {},
});

const access = localStorage.getItem("access");

const getInitialTheme = (): boolean => {
  const localThema = localStorage.getItem("theme");
  if (localThema === "true") {
    return true;
  }
  return false;
};

function App() {
  const [isThema, setIsThema] = useState(getInitialTheme());
  const [isLoadingBlock, setIsLoadingBlock] = useState(true);
  const [isErrorValidation, setIsErrorValidation] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);
  const [openName, setOpenName] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isThema));
  }, [isThema])


  useEffect(() => {
    let isOk = true;
    if (access) {
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((json) => {
          if (isOk) {
            setUser(json);
          }
        });
    }
  }, []);

  return (
    <ContextAll.Provider
      value={{
        isThema: isThema,
        setIsThema: setIsThema,
        isLoadingBlock: isLoadingBlock,
        setIsLoadingBlock: setIsLoadingBlock,
        isErrorValidation: isErrorValidation,
        setIsErrorValidation: setIsErrorValidation,
        user,
        setUser,
        openName: openName,
        setOpenName: setOpenName,
      }}
    >
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ContextAll.Provider>
  );
}

export default App;
