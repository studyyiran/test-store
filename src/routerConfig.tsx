import TestUseEffect from "./pages/useEffect";
import TestPage from "./pages/testPage";
import { AntdFormTest } from "./pages/antdForm";
import EventLoop from "./pages/eventLoop";
import TestBindJs from "./pages/testBindJs";
import { TestReactDom } from "./pages/testReactDom";
import { Main } from "./pages/main";
import { TestUseMemo } from "./pages/useMemo/index";
import CloneElement from "./pages/cloneElement";
import TestFuheComponent from "./pages/testFuheComponent";
import Gate from "./pages/xOr/index";
import Gate2 from "./pages/xOr/index2";
import EasyFormReview from "./pages/easyForm";
import { ReviewTab } from "./pages/reviewAntTab";
import TestTs from "./pages/testTypeScript";

export const routerConfig = [
  // {
  //   exact: true,
  //   path: "/",
  //   Component: Main
  // },
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
  },
  {
    path: "/test-usememo",
    Component: TestUseMemo
  },
  {
    path: "/clone-element",
    Component: CloneElement
  },
  {
    path: "/test-fuhe",
    Component: TestFuheComponent
  },
  {
    path: "/gate-box",
    Component: Gate
  },
  {
    path: "/gate-box-2",
    Component: Gate2
  },
  {
    path: "/easy-form-review",
    Component: EasyFormReview
  },
  {
    path: "/review-tab",
    Component: ReviewTab
  },
  {
    path: "/test-ts",
    Component: TestTs
  }
];
