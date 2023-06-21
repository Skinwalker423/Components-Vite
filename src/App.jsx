import "./App.css";
import { Route } from "./components";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SideBar from "./components/SideBar";
import ModalPage from "./pages/ModalPage";
import { useEffect, useState } from "react";
import { CookiesPopup } from "./components";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 10000);
  }, []);

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
      </div>
      {showPopup && <CookiesPopup onClose={handleClose} />}
    </div>
  );
}

export default App;
