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
    <div className='flex justify-center items-center gap-5 w-full'>
      <Button success>Accept</Button>
      <Button secondary>Reject</Button>
    </div>
  );

  const modal = (
    <Modal
      title='Accept Cookies Policy'
      actionBar={actionBar}
      onClose={handleClose}
      inset={80}
    >
      <div>
        <p className='my-2 max-h-32 overflow-auto'>
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
          expedita nemo? Modal Body Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse
          exercitationem dolore culpa neque nam, dolorem
          ratione aliquam architecto consequatur est
          quisquam fugiat cum quo quae repellat iusto
          doloribus laborum modi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni animi dolorum
          ducimus architecto? Expedita voluptas aperiam
          cumque nam maiores exercitationem. Distinctio
          suscipit doloremque reiciendis velit aspernatur.
          Exercitationem iusto expedita nemo?
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
