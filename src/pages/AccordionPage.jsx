import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ad temporibus sapiente quidem ex. Cum, laboriosam tenetur cumque harum neque repellendus earum, magnam, labore quisquam vitae eum! Doloremque, sequi beatae.",
    },
    {
      id: 2,
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ad temporibus sapiente quidem ex. Cum, laboriosam tenetur cumque harum neque repellendus earum, magnam, labore quisquam vitae eum! Doloremque, sequi beatae.",
    },
    {
      id: 3,
      title: "Accordion 3",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ad temporibus sapiente quidem ex. Cum, laboriosam tenetur cumque harum neque repellendus earum, magnam, labore quisquam vitae eum! Doloremque, sequi beatae.",
    },
  ];

  return (
    <div className='w-full h-full'>
      <div className='my-5'>
        <h1>Accordion</h1>
      </div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
