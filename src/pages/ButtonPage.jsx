import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
  return (
    <div>
      <h1>Button Page</h1>
      <div className='flex flex-col gap-2'>
        <Button
          rounded
          outline
          primary
          onClick={handleOnClick}
          className='mb-10'
        >
          count is {count}
        </Button>
        <Button success>
          <GoBell /> <span>Submit</span>
        </Button>
        <Button secondary>Pay Now</Button>
        <Button outline warning>
          Update
        </Button>
        <Button outline danger>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
