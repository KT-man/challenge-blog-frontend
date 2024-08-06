import { FC, PropsWithChildren } from "react";

interface BaseCardComponentInterface extends PropsWithChildren {}

const BaseCardComponent: FC<BaseCardComponentInterface> = ({ children }) => {
  return <div>{children}</div>;
};

export default BaseCardComponent;
