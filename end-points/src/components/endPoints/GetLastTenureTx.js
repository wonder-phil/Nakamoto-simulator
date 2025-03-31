import { React } from 'react';
import { useEffect, useState } from "react";

import TenureTxContainer from "../coreContainers/TenureTxContainer";
import RoutesAndEndpoints from "./RoutesAndEndpoints";

export default function GetLastTenureTx() {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {

        const API_PROXY_URL_LAST_TENURE_TX = RoutesAndEndpoints.ROUTE_LAST_TENURE_TX;

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
                <h6>{container.toJson()}</h6>
            ) : (
                <p>Loading...is the PROXY running?</p>
            )}
        </div>
    );
}
