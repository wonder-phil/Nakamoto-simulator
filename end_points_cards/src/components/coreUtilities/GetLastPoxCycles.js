import { useEffect, useState } from "react";

import PoxCycle from "../coreContainers/PoxCycle";   
import RoutesAndEndpoints from "./RoutesAndEndpoints";

 export default function PoxCycles() {
    const API_POX_CYCLE_URL = RoutesAndEndpoints.ROUTE_LAST_POX_CYCLE;
    console.log("API_POX_CYCLE_URL: ", API_POX_CYCLE_URL);
    const [container, setContainer] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_POX_CYCLE_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                // Fill the container with JSON data
                const poxCycles = new PoxCycle(jsonData);
                setContainer(poxCycles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h2>Pox Data</h2>
            {container ? (
                <pre>{container.toJson()}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

