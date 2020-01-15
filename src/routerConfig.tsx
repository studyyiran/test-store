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
import TestRedux from "./pages/testRedux";
import { TestModal } from "./pages/testModal";
import { MiaoMiao } from "./pages/testTypeScript/util/miaomiao";
import TestCurrency from "./pages/testCurrency";
import TestTimer from "./pages/testTimer";
import TestTimer2 from "./pages/testTimer/index2";
import CostTime from "./pages/costTime";

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
    path: "/test-redux",
    Component: TestRedux
  },
  {
    path: "/testModal",
    Component: TestModal
  },
  {
    path: "/miaomiao",
    Component: MiaoMiao
  },
  {
    path: "/testModal",
    Component: TestModal
  },
  {
    path: "/testCurrency",
    Component: TestCurrency
  },
  {
    path: "/test-timer",
    Component: TestTimer
  },
  {
    path: "/cost-time",
    Component: CostTime
  },
  {
    path: "/test-timer-2",
    Component: TestTimer2
  },
  {
    path: "/ts-",
    Component: TestTimer2
  },
  {
    path: "/test-ts",
    Component: TestTs
  }
];
