import React from "react";
import Modal from "./Modal";
import Button from "./Button";

const CookiesPopup = ({ onClose }) => {
  const handleAccept = () => {
    console.log("gotcha sucka");
    onClose();
  };
  const handleReject = () => {
    console.log("fuck off then");
    onClose();
    window.history.pushState({}, "", "/wompwomp");
  };

  const actionBar = (
    <div className='flex justify-center items-center gap-5 w-full'>
      <Button onClick={handleAccept} success>
        Accept
      </Button>
      <Button onClick={handleReject} secondary>
        Reject
      </Button>
    </div>
  );

  const modal = (
    <Modal actionBar={actionBar} onClose={onClose}>
      <div>
        <h3 className='font-bold text-2xl'>
          Accept Cookies Policy
        </h3>
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
  return <div>{modal}</div>;
};

export default CookiesPopup;
