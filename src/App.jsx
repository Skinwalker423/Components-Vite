import "./App.css";
import { Button, Link, Route } from "./components";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SideBar from "./components/SideBar";

function App() {
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
      </div>
    </div>
  );
}

export default App;
