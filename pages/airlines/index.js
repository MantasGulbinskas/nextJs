import useFetch from "../hooks/useFetch";

const Airlines = () => {
    const {data, loading, error} = useFetch('https://api.instantwebtools.net/v1/airlines')
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
    console.log(data)
    return (
        <h2>Airlines</h2>
    )
}

export default Airlines;
