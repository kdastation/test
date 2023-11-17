import { Modal } from "@shared/ui/Popups";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};
export const SuccessModal = ({ isVisible, onClose }: Props) => {
  return (
    <Modal isOpen={isVisible} onClose={onClose}>
      <div>Success!</div>
    </Modal>
  );
};
