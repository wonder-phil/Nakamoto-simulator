import { useEffect, useState } from "react";

import BurnBlockContainer from "../coreContainers/BurnBlockContainer"; // Assuming you have this container defined somewhere
import RoutesAndEndpoints from "./RoutesAndEndpoints";

export default function GetOneBitcoinBlock({ fullBitcoinHash }) {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const API_PROXY_URL_ONE_BURN_BLOCK = RoutesAndEndpoints.ROUTE_ONE_BURN_BLOCK( fullBitcoinHash );

        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL_ONE_BURN_BLOCK, {
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
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h2>One Bitcoin Block Data</h2>
            {container ? (
                <h6>{container.toJson()}</h6>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

 
