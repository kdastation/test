import { BalanceInfo, useGetBalance } from "@entities/Balance";
import { useGetCoinPrice } from "@entities/Coin";
import { useBoolean } from "@shared/hooks/useBoolean";
import { Modal } from "@shared/ui/Popups";
import { Form } from "../Form/Form";
import { SuccessModal } from "../Success/SuccessModal";
import { getMaxAmount } from "../../model/lib/getMaxAmount";

type Props = {
  id: number;
  onClose: () => void;
  isVisible: boolean;
};
export const BuyCoinsModal = ({ id, isVisible, onClose }: Props) => {
  const { data: priceInfo } = useGetCoinPrice(id);
  const { data: balanceInfo } = useGetBalance();

  const [isVisibleSuccess, setIsVisibleSuccess] = useBoolean(false);

  if (isVisibleSuccess) {
    return (
      <SuccessModal
        isVisible={isVisibleSuccess}
        onClose={setIsVisibleSuccess.off}
      />
    );
  }

  if (!priceInfo || !balanceInfo) {
    return (
      <Modal isOpen={isVisible} onClose={onClose}>
        <div>loading...</div>
      </Modal>
    );
  }

  const maxAmount = getMaxAmount(balanceInfo.balance, priceInfo.price);

  return (
    <Modal isOpen={isVisible} onClose={onClose} title="Buy Coin">
      <BalanceInfo />
      <div>price: {priceInfo.price}</div>
      <Form
        onSuccess={setIsVisibleSuccess.on}
        id={id}
        initialValues={{
          amount: maxAmount,
        }}
      />
    </Modal>
  );
};
