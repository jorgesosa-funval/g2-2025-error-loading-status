import axios from "axios";
import { useEffect, useState } from "react"

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink

export default function useData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await axios.get(url)
            setTimeout(() => {
                setData(response.data)
                setLoading(false) 
            }, 3000)
        } catch (error) {
            console.error(error);
            setError(error.message)
        } finally {
           setLoading(false)  
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
