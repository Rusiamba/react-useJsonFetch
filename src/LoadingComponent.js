import useJsonFetch from "./useJsonFetch";

function LoadingComponent() {
    const [{data, isLoading, hasError}] = useJsonFetch(' http://localhost:7070/loading', [])
    return (
        <div className="data">
            {isLoading&&<p>Loading...</p>}
            {hasError&&<p>Error</p>}
            <div>{data.status}</div>
        </div>
    );
}

export default LoadingComponent;
