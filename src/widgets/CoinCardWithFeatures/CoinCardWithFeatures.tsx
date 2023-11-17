import { CardCoin, Coin } from "@entities/Coin";
import { BuyCoinsTrigger } from "@features/BuyCoins";

type Props = {
  coin: Coin;
};
export const CoinCardWithFeatures = ({ coin }: Props) => {
  return (
    <BuyCoinsTrigger id={coin.id}>
      <CardCoin coin={coin} />
    </BuyCoinsTrigger>
  );
};
