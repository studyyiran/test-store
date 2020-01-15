import React, { useEffect } from "react";

interface IProps {
  name: string;
  age?: number;
}

// 1 组件定义的几种方法.这是最标准,最常规的定义方法.
const Hello: React.FC<IProps> = props => {
  return (
    <div>
      <span>{props.name}</span>
      {props.age ? props.age + 5 : "null"}
    </div>
  );
};

interface IHoc {
  (func: React.FC<IProps>): React.FC<IProps>;
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

这种学习方法对几个东西有奇效
1)不知道从哪里入手,尤其是那种范围比较大,不知道怎么梳理的内容
2)对于那种背诵,或者你不感兴趣,又想拿低保的内容

 */

// helloWrapper是啥?是一个传入一个有特定的props的组件,返回一个通用组件的hoc
// const HelloWrapper: IHoc = (Component) => {
//   const useWrapper: React.FC = props => {
//     useEffect(() => {
//       console.log("123");
//     }, []);
//     return <Component {...props} />;
//   };
//   return useWrapper;
// };

// 泛型
// const HelloWrapper = <T extends object>(Component: React.FC<T>) :React.FC<T> => {
//   const useWrapper: React.FC = props => {
//     useEffect(() => {
//       console.log("123");
//     }, []);
//     return <Component {...props as T} />;
//   };
//   return useWrapper;
// };

const HelloWrapper: IHoc = Component => {
  const useWrapper: React.FC = props => {
    useEffect(() => {
      console.log("123");
    }, []);
    return <Component {...(props as IProps)} />;
  };
  return useWrapper;
};

export const FinalHello: React.FC<IProps> = HelloWrapper(Hello);

/*
https://www.tslang.cn/docs/handbook/functions.html
https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
https://segmentfault.com/a/1190000020536678
https://segmentfault.com/a/1190000018906665
 */
