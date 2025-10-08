import axios from "axios";
import { useEffect, useState } from "react";
const useAppHook = () => { 
    const [apps, setApps] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApps = async () => {
            try {
                const response = await axios.get("../app.json");
                console.log(response.data);
                setApps(response.data);
            } catch (error) {
                console.error("Error fetching apps:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchApps();
    }, []);

    const [topApps, setTopApps] = useState([]);
    useEffect(() => {
        if (apps.length > 0) {
            const sortedApps = [...apps].sort(
              (a, b) => b.downloads_millions - a.downloads_millions
            );
            setTopApps(sortedApps.slice(0, 8));
        }
    }, [apps]);

    return { apps, error, loading, topApps };
}
export default useAppHook;