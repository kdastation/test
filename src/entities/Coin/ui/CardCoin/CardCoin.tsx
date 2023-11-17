import classNames from "classnames";
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import { Coin } from "../../model/types/Coin";
import styles from "./CardCoin.module.scss";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type Props = {
  coin: Coin;
} & DivProps;
export const CardCoin = forwardRef<HTMLDivElement, Props>(
  ({ coin, ...props }, ref) => {
    return (
      <div
        {...props}
        className={classNames(styles.container, props.className)}
        ref={ref}
      >
        <div>id: {coin.id}</div>
        <div>title: {coin.title}</div>
        <div>network: {coin.network}</div>
        <div>status: {coin.status}</div>
      </div>
    );
  },
);
