import axios from "axios";
import { useEffect, useState } from "react"

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink

export default function useData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            const response = await axios.get(url)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data,
        error,
        loading,
    }
}
