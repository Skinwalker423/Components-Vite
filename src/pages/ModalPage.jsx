import React, { useState } from "react";
import { Modal, Button } from "../components";

const ModalPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Modal</h1>
      <Button onClick={handleOpen} primary outline>
        Open Modal
      </Button>
      {open && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPage;
