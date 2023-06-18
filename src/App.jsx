import {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { NavigationContext } from "./context/navigation";
import "./App.css";
import { Button, Link, Route } from "./components";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  const { currentPath, navigate } = useContext(
    NavigationContext
  );

  return (
    <div className='flex gap-10 justify-start items-center w-full h-screen'>
      <div className='h-1/2 flex flex-col items-center justify-evenly'>
        <Link to='/dropdown'>
          <Button primary>Dropdown Page</Button>
        </Link>
        <Link to='/accordion'>
          <Button danger>Accordion Page</Button>
        </Link>
        <Link to='/button'>
          <Button success>Button Page</Button>
        </Link>
      </div>
      <Route path='/dropdown'>
        <DropdownPage />
      </Route>
      <Route path='/button'>
        <ButtonPage />
      </Route>
      <Route path='/accordion'>
        <AccordionPage />
      </Route>
    </div>
  );
}

export default App;
