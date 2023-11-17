import { BalanceInfo } from "@entities/Balance";
import { Coins } from "./Coins/Coins";

export const MainPage = () => {
  return (
    <div>
      <BalanceInfo />
      <Coins />
    </div>
  );
};

export default MainPage;
