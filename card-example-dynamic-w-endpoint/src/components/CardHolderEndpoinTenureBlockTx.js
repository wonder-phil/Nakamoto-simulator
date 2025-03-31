import { useEffect, useState } from "react";

import RoutesAndEndpoints from "./endPoints/RoutesAndEndpoints";
import DynamicCardCollapsible from "./DynamicCardCollapsible";
import TenureTxContainer from "./coreContainers/TenureTxContainer";

export default function CardHolderEndpointBurnBlock() {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const API_PROXY_URL = RoutesAndEndpoints.ROUTE_LAST_TENURE_TX;
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                const tenureTxContainer = new TenureTxContainer(jsonData['results'][0]);
                setContainer(tenureTxContainer.getData());
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {container ? (
               <DynamicCardCollapsible props={container} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}