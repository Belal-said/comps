import CarForm from "../components/cars/CarForm";
import CarSearch from "../components/cars/CarSearch";
import CarList from "../components/cars/CarList";
import CarValue from "../components/cars/CarValue";

function CarsPage() {
    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    );
}

export default CarsPage;
