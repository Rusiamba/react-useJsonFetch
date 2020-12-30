import './App.css';
import DataComponent from "./DataComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

function App() {
    return (
        <div className="App">
            <DataComponent/>
            <ErrorComponent/>
            <LoadingComponent/>
        </div>
    );
}

export default App;
