import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(opts);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(respons => respons.json())
            .then(response => {
                setData(response)
            })
            .catch(e => setError(e))
            .finally(() => setLoading(false))
    }, []);
    return [{data, isLoading, hasError}];
}
