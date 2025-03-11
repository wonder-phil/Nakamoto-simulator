import { useEffect, useState } from "react";

import BitcoinJsonContainer from "../core/BitcoinJsonContainer";
import RoutesAndEndpoints from "./RoutesAndEndpoints";

export default function GetOneBitcoinBlock({ fullBitcoinHash }) {
    
    const API_PROXY_URL_ONE_BURN_BLOCK = RoutesAndEndpoints.ROUTE_ONE_BURN_BLOCK( fullBitcoinHash );

    console.log("API_PROXY_URL_ONE_BURN_BLOCK: ", API_PROXY_URL_ONE_BURN_BLOCK);
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL_ONE_BURN_BLOCK, {
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
            <h2>One Bitcoin Block Data</h2>
            {container ? (
                <pre>{container.toJson()}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

 
