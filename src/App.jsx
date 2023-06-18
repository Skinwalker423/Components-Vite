import "./App.css";
import { Button, Link, Route } from "./components";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className='flex gap-10 justify-start items-center w-full h-screen'>
      <SideBar />
      <Route path='/'>
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
