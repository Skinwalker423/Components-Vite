import React from "react";
import { Route } from "../components";
import ButtonPage from "../pages/ButtonPage";
import AccordionPage from "../pages/AccordionPage";
import DropdownPage from "../pages/DropdownPage";
import SideBar from "../components/SideBar";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";
import CounterPage from "../pages/CounterPage";

const ComponentsPage = () => {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div className='col-span-5'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
};

export default ComponentsPage;
