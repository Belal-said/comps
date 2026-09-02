import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button success>
                    Click me
                </Button>
            </div>
            <div>
                <Button>Buy Now</Button>
            </div>
            <div>
                <Button>See Deal</Button>
            </div>
            <div>
                <Button>Hide Ads</Button>
            </div>
            <div>
                <Button>See More</Button>
            </div>
        </div>
    );
};

export default App;
