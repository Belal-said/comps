import { GoBell } from "react-icons/go";
import Button from "./Button";

const App = () => {
    const handleClick = () => {
        console.log("Button clicked");
    }

    return (
        <div>
            <div> 
                <Button outline primary onClick={handleClick}>
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button secondary>Buy Now</Button>
            </div>
            <div>
                <Button success outline>
                    See Deal
                </Button>
            </div>
            <div>
                <Button warning>Hide Ads</Button>
            </div>
            <div>
                <Button danger>See More</Button>
            </div>
        </div>
    );
};

export default App;
