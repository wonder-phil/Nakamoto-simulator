import { useEffect, useState } from "react";

import BitcoinJsonContainer from "../coreContainers/BitcoinJsonContainer";
import RoutesAndEndpoints from "./RoutesAndEndpoints";

export default function GetLastBitcoinBlock(fullBitcoinHash) {
    const API_PROXY_URL = RoutesAndEndpoints.ROUTE_LAST_BURN_BLOCK;
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                // Fill the container with JSON data
                const bitcoinJsonContainer = new BitcoinJsonContainer(jsonData);
                setContainer(bitcoinJsonContainer);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h2>Last Burn-block (Bitcoin) Data</h2>
            {container ? (
                <pre>{container.toJson()}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

 
