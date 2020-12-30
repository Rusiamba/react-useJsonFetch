import useJsonFetch from "./useJsonFetch";

function ErrorComponent() {
    const [{data, isLoading, hasError}] = useJsonFetch('http://localhost:7070/error ', [])
    return (
        <div className="error">
            {isLoading&&<p>Loading...</p>}
            {hasError&&<p>Error</p>}
            <div>{data.status}</div>
        </div>
    );
}

export default ErrorComponent;
