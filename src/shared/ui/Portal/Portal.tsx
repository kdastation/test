import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { getRoot } from "@shared/consts/getRoot";

type PortalProps = {
  children?: ReactNode;
  element?: Element;
};

export const Portal = ({ children, element = getRoot() }: PortalProps) =>
  createPortal(children, element);
