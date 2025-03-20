import { useEffect, useState } from "react";

import PoxCycle from "../coreContainers/PoxCycle";   
import RoutesAndEndpoints from "./RoutesAndEndpoints";

 export default function PoxCycles() {

    const [container, setContainer] = useState(null);

    useEffect(() => {
        const API_POX_CYCLE_URL = RoutesAndEndpoints.ROUTE_LAST_POX_CYCLE;
        
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
    }, []);

    return (
        <div>
            <h2>Pox Data</h2>
            {container ? (
                <h6>{container.toJson()}</h6>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

