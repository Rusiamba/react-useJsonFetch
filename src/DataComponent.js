import useJsonFetch from "./useJsonFetch";

function DataComponent() {
    const [{data, isLoading, hasError}] = useJsonFetch('http://localhost:7070/data', [])
    return (
        <div className="data">
            {isLoading&&<p>Loading...</p>}
            <div>{data.status}</div>
        </div>
    );
}

export default DataComponent;
