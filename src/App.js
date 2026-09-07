import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdonwPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import LoginPage from "./pages/LoginPage";

function App() {
    // const [token, setToken] = useState("");

    // const handleLogout = () => {
    //     setToken('')
    // }


    const app = <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            {/* <Sidebar token={token} /> */}
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdonwPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage  />
                </Route>
                <Route path="/modal" >
                    <ModalPage />
                </Route>
                <Route path="/table" >
                    <TablePage />
                </Route>
                {/* <button onClick={handleLogout}>logout</button> */}
            </div>
        </div>

    // return token ? app : <LoginPage token={token} setToken={setToken} />;
    return app;
}

export default App;
