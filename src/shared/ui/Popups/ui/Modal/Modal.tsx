import { ReactNode } from "react";
import { Overlay, Props as OverlayProps } from "../Overlay/Overlay";
import styles from "./Modal.module.scss";
import { Button } from "@shared/ui/Button";

export type Props = Pick<OverlayProps, "isOpen" | "onClose" | "children"> & {
  title?: ReactNode;
  closeIcon?: boolean;
};

export const Modal = ({
  children,
  title,
  onClose,
  closeIcon = true,
  ...props
}: Props) => (
  <Overlay {...props} onClose={onClose}>
    <div className={styles.container}>
      {closeIcon && <Button onClick={onClose}>Close</Button>}
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  </Overlay>
);
