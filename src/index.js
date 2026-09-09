import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";
import { store } from "./store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>,
);
