import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import "./index.scss";
import RouterLink from "../../components/routerLink";

export default function TestTimer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    return () => {
      debugger;
    };
  }, []);

  function RenderByCondition(props: { ComA: any; ComB: any; func: any }) {
    const { ComA, ComB, func } = props;
    if (func()) {
      return ComA;
    } else {
      return ComB;
    }
  }

  const A = (props: { time: number }) => {
    const { time } = props;
    return (
      <div className="child-component">
        <img src={require("../../res/test.png")} />
        {/*<RouterLink to={""}>*/}
        {/*    <img src={require("../../res/test.png")} />*/}
        {/*</RouterLink>*/}

        {time}
      </div>
    );
  };
  const Hehe: any = useRef();
  useEffect(() => {
    console.log("run");
    Hehe.current = A;
  }, []);

  const ChildComponent = Hehe.current;
  if (!ChildComponent) {
    return null;
  }
  /*
  有key也拯救不了.因为你的Componet变化的太快了.
   */
  // return <A time={time} key={1} />;
  return A({ time: time });
  // const ChildComponent = useMemo(() => A, []);
  // const ChildComponent = useCallback(A, []);
  // const ChildComponent = React.memo((props: { time: number }) => {
  //     const { time } = props;
  //     return (
  //         <div className="child-component">
  //             <img src={require("../../res/test.png")} />
  //             {/*<RouterLink to={""}>*/}
  //             {/*    <img src={require("../../res/test.png")} />*/}
  //             {/*</RouterLink>*/}
  //
  //             {time}
  //         </div>
  //     );
  // }, () => true);
  console.log(time);
  return <ChildComponent time={time} key={1} />;

  return (
    <div>
      {time}
      <RenderByCondition
        ComA={<ChildComponent time={time} />}
        ComB={() => {
          return <div>123</div>;
        }}
        func={() => time > 0}
      />
    </div>
  );
}

function TestKeys() {
  const [list, setList] = useState([0]);

  useEffect(() => {
    window.setInterval(() => {
      setList((list: any) => {
        list.unshift(Date.now());
        console.log(list);
        return [...list];
      });
    }, 1000);
  }, []);

  console.log();

  return (
    <div>
      <p>
        即便是这种情况,因为key具有绝对的稳定性,虽然说我们更新的内容变多了,但是我们仍然不需要刷新img.,多亏key的稳定一致,让我们仅仅需要更新节点内部的内容
      </p>
      {list.map((item, index) => (
        <div key={index}>
          <img src={require("../../res/test.png")} />
          {item}
        </div>
      ))}
    </div>
  );
}
