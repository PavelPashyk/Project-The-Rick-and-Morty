import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { PageStart } from "../pages/PageStart";

export const RootRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<PageStart />} /> */}
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

