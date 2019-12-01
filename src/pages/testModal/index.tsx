import React from "react";
import { Button, Modal } from "antd";

export function TestModal() {
  return (
    <div>
      <Button
        onClick={() => {
          Modal.confirm({

          });
        }}
      >
        Button
      </Button>
    </div>
  );
}
