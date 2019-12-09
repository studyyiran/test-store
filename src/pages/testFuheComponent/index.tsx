import React from "react";
import { UpdateFormLayout } from "./components";
const { RenderButton } = UpdateFormLayout;
export default function TestFuheComponent() {
  return (
    <div>
      <UpdateFormLayout title="Edit Profile">
        <RenderButton>123</RenderButton>
      </UpdateFormLayout>
    </div>
  );
}
