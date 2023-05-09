import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
       const res = await fetch(url)
           .then(res => (res.json()))
           .then( res => setData(res))
           .catch((e) => setError(e))
            setLoading(false)
        }
    fetchData()
}, [url])

    return {data, loading, error}
}
export default useFetch;