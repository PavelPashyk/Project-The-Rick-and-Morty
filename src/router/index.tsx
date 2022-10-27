import { Route, Routes } from "react-router-dom";
import { PageLogin } from "../pages/PageLogin";
import { PageRegistration } from "../pages/PageRegistration";
import { Main } from "../pages/Main";
import { PageStart } from "../pages/PageStart";
import { PageLast } from "../pages/PageLast";
import { PageNotFound } from "../pages/PageNotFound";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageStart />} />
      <Route path="/main" element={<Main />} />
      <Route path="/registration" element={<PageRegistration />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/page_last" element={<PageLast />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
