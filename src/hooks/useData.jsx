import axios from "axios";
import { useState } from "react"



export default function useData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            const response = await axios.get(url)
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    return {
        data,
        error,
        loading,
    }
}
