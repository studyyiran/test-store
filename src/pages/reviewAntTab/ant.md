ant的tab 解决了一些问题.

但是它本质上还是用
chilren 完成反射.

用xx完成注入.


tab由几个组件组成.
Tabs
Tabs在接收所有的参数后,直接调用了内部的rc-tab

rc-tab
他首先,试图组织tabs和content
先说content
他组织的方式是.
直接注入了activeKey进去了.实际上,他通过外面的renderContent来完成定位,然后进行clone注入.但是实际上,他并不知道,他注入的组件是什么.
因此,我们在rc-tab中,定义了组件是什么.
然后经过rc-tab,被注入了.
const contents = React.cloneElement(render(), {active: 123, children: props.children})
return <div>{contents}</div>

然后再tabContent中.我们实际上拿到了,全部的props,我主要关心的是props.children(这个属性是怎么拿到的呢?)
然后我在这里进行了反射注入.

最后的tabPane组件,只不过完成了最简单的渲染.

类似的.tabbar也是相同的.


TabContent
TabPane

这样的好处有如下几个
1)内部组件专注于渲染.不关心值从哪里传入进来的.
2)我们通过tabpane将tab的信息和pane的信息都带进来了.之后分别注入,然后再共同渲染.这样非常的简略