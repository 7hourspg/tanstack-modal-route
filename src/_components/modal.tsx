import * as Dialog from "@radix-ui/react-dialog";

const Modal = (props: Dialog.DialogProps) => {
  return (
    <Dialog.Root open {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.DialogContent className="fixed left-1/2 m-4 bg-gray-800 size-[400px] shadow-lg top-1/2 -translate-x-1/2 -translate-y-1/2">
          {props.children}
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
