import { useEffect, useState } from "react";

import RoutesAndEndpoints from "./endPoints/RoutesAndEndpoints";
import PoxCycle from "./coreContainers/PoxCycle";
import DynamicCardCollapsible from "./DynamicCardCollapsible";

export default function CardHolderEndpointBurnBlock() {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const API_PROXY_URL = RoutesAndEndpoints.ROUTE_LAST_POX_CYCLE;
        async function fetchData() {
            try {
                const response = await fetch(API_PROXY_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                const poxCycle = new PoxCycle(jsonData['results'][0]);
                setContainer(poxCycle.getData());
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