import { useBoolean } from "@shared/hooks/useBoolean";
import { callAllHandlers } from "@shared/lib/callAllHandlers";
import { cloneElement, ReactElement } from "react";
import { BuyCoinsModal } from "../BuyCoinsModal/BuyCoinsModal";

type Props = {
  id: number;
  children: ReactElement;
};
export const BuyCoinsTrigger = ({ id, children }: Props) => {
  const [isVisibleModal, setIsVisibleModal] = useBoolean(false);

  return (
    <>
      {cloneElement(children, {
        onClick: callAllHandlers(children.props.onClick, setIsVisibleModal.on),
      })}

      {isVisibleModal && (
        <BuyCoinsModal
          id={id}
          onClose={setIsVisibleModal.off}
          isVisible={isVisibleModal}
        />
      )}
    </>
  );
};
