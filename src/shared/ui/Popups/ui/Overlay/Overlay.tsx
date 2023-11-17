import classNames from "classnames";
import { ReactNode } from "react";

import { Portal } from "@shared/ui/Portal";

import styles from "./Overlay.module.scss";

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
};

export const Overlay = ({ isOpen, onClose, className, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div role="dialog" className={classNames(styles.container, className)}>
        <div onClick={onClose} className={styles.overlay} />
        {children}
      </div>
    </Portal>
  );
};
