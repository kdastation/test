import { useGetBalance } from "../../model/api/getBalance/getBalance";

export const BalanceInfo = () => {
  const { data: balance } = useGetBalance();

  if (!balance) {
    return <div>loading...</div>;
  }

  return <div>balance: {balance.balance}</div>;
};
