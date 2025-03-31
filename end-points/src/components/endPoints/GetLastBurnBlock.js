import { useEffect, useState } from "react";

import BurnBlockContainer from "../coreContainers/BurnBlockContainer"; 
import RoutesAndEndpoints from "./RoutesAndEndpoints";

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
                <p>Loading...is the PROXY running?</p>
            )}
        </div>
    );
}

 
