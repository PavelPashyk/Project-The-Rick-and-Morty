import { Route, Routes } from "react-router-dom";
import { PageLogin } from "../pages/PageLogin";
import { PageRegistration } from "../pages/PageRegistration";
import { Main } from "../pages/Main";
import { PageStart } from "../pages/PageStart";
import { PageLast } from "../pages/PageLast";
import { PageNotFound } from "../pages/PageNotFound";
import { PageFullPost } from "../pages/PageFullPost";
import { PageSuccess } from "../pages/PageSuccess";
import { PageActivation } from "../pages/PageActivation";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageStart />} />
      <Route path="/page_full_post/:personId" element={<PageFullPost />} />
      <Route path="/main" element={<Main />} />
      <Route path="/registration" element={<PageRegistration />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/success" element={<PageSuccess />} />
      <Route path="/activate/:uid/:token" element={<PageActivation />} />
      <Route path="/page_last" element={<PageLast />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
