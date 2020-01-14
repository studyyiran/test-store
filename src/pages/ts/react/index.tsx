import React, { useEffect } from "react";

interface IProps {
  name: string;
  age?: number;
}

// 1 组件定义的几种方法
const Hello: React.FC<IProps> = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      {props.age ? props.age + 5 : "null"}
    </div>
  );
};

interface IHoc {
  (func: React.FC<IProps>): React.FC;
}

/*
这个例子比较好的说明了ts 结合react的重要性.
进行静态检测,永远要比dev检测要高效.这种高效性非常不错.
尤其在写复杂的hoc的时候,能够非常高的提高书写性

但是泛型使用的并不好,这块明天再看一下.

但是无论如何,这种学习是有效的.
这种学习就是:围绕着范式,来进行学习.这样会很有方向.
虽然说,一个范式,后面牵扯了很多更基础的知识.你需要花费很多额外的时间完成学习.
但是,这种学习方法仍然是高效的.
 */
const HelloWrapper: IHoc = Component => {
  const useWrapper: React.FC = props => {
    useEffect(() => {
      console.log("123");
    }, []);
    return <Component {...props} />;
  };
  return useWrapper;
};

export const FinalHello: React.FC = HelloWrapper(Hello);


/*
https://segmentfault.com/a/1190000020536678
 */
