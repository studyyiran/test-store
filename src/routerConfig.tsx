import TestUseEffect from "./pages/useEffect";
import TestPage from "./pages/testPage";
import { AntdFormTest } from "./pages/antdForm";
import EventLoop from "./pages/eventLoop";
import TestBindJs from "./pages/testBindJs";
import { TestReactDom } from "./pages/testReactDom";
import { Main } from "./pages/main";

export const routerConfig = [
  {
    path: "/",
    Component: Main
  },
  {
    path: "/a",
    Component: TestUseEffect
  },
  {
    path: "/b",
    Component: TestPage
  },
  {
    path: "/antd",
    Component: AntdFormTest
  },
  {
    path: "/eventLoop",
    Component: EventLoop
  },
  {
    path: "/test",
    Component: TestBindJs
  },
  {
    path: "/test-react-dom",
    Component: TestReactDom
  }
];
