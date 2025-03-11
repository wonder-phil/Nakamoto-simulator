import { React } from 'react';
import { useEffect, useState } from "react";

import TenureTxContainer from "../core/BitcoinJsonContainer";
import RoutesAndEndpoints from "./RoutesAndEndpoints";

export default function GetLastTenureTx() {
    
    const API_PROXY_URL_LAST_TENURE_TX = RoutesAndEndpoints.ROUTE_LAST_TENURE_TX;

    console.log("API_PROXY_URL_LAST_TENURE_TX: ", API_PROXY_URL_LAST_TENURE_TX);
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL_LAST_TENURE_TX, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                // Fill the container with JSON data
                const tenureTxContainer = new TenureTxContainer(jsonData);
                setContainer(tenureTxContainer);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h2>Last tenure transaction</h2>
            {container ? (
                <pre>{container.toJson()}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
