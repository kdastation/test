import { BalanceInfo, useGetBalance } from "@entities/Balance";
import { useGetCoin } from "@entities/Coin";
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
  const { data: coin } = useGetCoin(id);
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

  if (!coin || !balanceInfo) {
    return (
      <Modal isOpen={isVisible} onClose={onClose}>
        <div>loading...</div>
      </Modal>
    );
  }

  const maxAmount = getMaxAmount(balanceInfo.balance, 1000);

  return (
    <Modal isOpen={isVisible} onClose={onClose} title="Buy Coin">
      <BalanceInfo />
      <div>price: 1000</div>
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
