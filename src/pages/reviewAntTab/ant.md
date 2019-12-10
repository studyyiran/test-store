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



TabContent
TabPane

