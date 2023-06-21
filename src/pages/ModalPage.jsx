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

  const actionBar = (
    <div className='flex justify-between w-full'>
      <Button secondary>Action</Button>
      <Button secondary>Action</Button>
    </div>
  );

  const modal = (
    <Modal
      closeIcon
      actionBar={actionBar}
      onClose={handleClose}
    >
      <div>
        <h3>Title Here</h3>
        <p className='my-2'>
          Modal Body Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse exercitationem dolore culpa
          neque nam, dolorem ratione aliquam architecto
          consequatur est quisquam fugiat cum quo quae
          repellat iusto doloribus laborum modi. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Magni
          animi dolorum ducimus architecto? Expedita
          voluptas aperiam cumque nam maiores
          exercitationem. Distinctio suscipit doloremque
          reiciendis velit aspernatur. Exercitationem iusto
          expedita nemo?
        </p>
      </div>
    </Modal>
  );

  return (
    <div>
      <h1>Modal</h1>
      <Button onClick={handleOpen} primary outline>
        Open Modal
      </Button>
      {open && modal}
    </div>
  );
};

export default ModalPage;
