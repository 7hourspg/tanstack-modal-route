import * as Dialog from "@radix-ui/react-dialog";

const Modal = (props: Dialog.DialogProps) => {
  return (
    <Dialog.Root open {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 border-2 border-red-500" />
        <Dialog.DialogContent className="fixed left-1/2 p-4 border-2 border-blue-500 size-[400px] shadow-lg top-1/2 -translate-x-1/2 -translate-y-1/2">
          {props.children}
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
