import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                 const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            }catch (err) {
                setError(err)
                setLoading(false)
            }

        }
    fetch()
    }, [url])
    return {data,loading,error};
}
export default useFetch