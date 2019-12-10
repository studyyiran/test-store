import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export function ReviewTab() {
  const arr = [
    {
      tab: "000",
      children: "heheheh123123123"
    },
    {
      tab: "111",
      children: "heheheh123123123"
    },
    {
      tab: "222",
      children: "heheheh123123123"
    }
  ];

  function callback(e: any) {
    console.log(e);
  }

  function renderTab() {
    return arr.map(({ tab, children }: any, index) => {
      return (
        <TabPane key={String(index)} tab={tab}>
          {children}
        </TabPane>
      );
    });
  }
  return <Tabs defaultActiveKey="1">{renderTab()}</Tabs>;
}
