import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { StoreTestNameContext } from "../../context/context";

export function TestModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Hehe />
      <Button
        onClick={() => {
          setShowModal(true);
          Modal.confirm({
            content: <Hehe />
          });
        }}
      >
        Button
      </Button>
      <Modal visible={showModal} centered={true}>
        <Hehe />
      </Modal>
    </div>
  );
}

function Hehe() {
  const storeTestNameContext = useContext(StoreTestNameContext);
  const { timeNow, addValue } = storeTestNameContext as any;
  return <div onClick={addValue}>{Date.now() + "is" + timeNow}</div>;
}
