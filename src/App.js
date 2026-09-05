import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdonwPage from "./pages/DropdownPage";

function App() {
    return (
        <div>
            <Link to="/accordion">Go to accordion</Link>
            <Link to="/dropdown">Go to dropdown</Link>
            <Route path='/accordion'><AccordionPage /></Route>
            <Route path='/dropdown'><DropdonwPage /></Route>
        </div>
    );
}

export default App;
