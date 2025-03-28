import { useEffect, useState } from "react";

import RoutesAndEndpoints from "./RoutesAndEndpoints";
import BurnBlockContainer from "../coreContainers/BurnBlockContainer";

export default function GetLastBitcoinBlock(fullBitcoinHash) {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const API_PROXY_URL = RoutesAndEndpoints.ROUTE_LAST_BURN_BLOCK;
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                // Fill the container with JSON data
                const burnBlockContainer = new BurnBlockContainer(jsonData);
                setContainer(burnBlockContainer);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Last Burn-block (Bitcoin) Data</h2>
            {container ? (
                <h6>{container.toJson()}</h6>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

 
