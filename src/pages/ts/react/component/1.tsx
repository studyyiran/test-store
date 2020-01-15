import React from "react";

interface IProps {
  firstName: string;
  lastName?: string;
}

export const React1: React.FC<IProps> = props => {
  return (
    <div>
      {props.firstName} + {props.lastName}
    </div>
  );
};
