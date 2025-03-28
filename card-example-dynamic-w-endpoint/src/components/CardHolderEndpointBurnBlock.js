import { useEffect, useState } from "react";

import RoutesAndEndpoints from "./endPoints/RoutesAndEndpoints";
import BurnBlockContainer from "./coreContainers/BurnBlockContainer";
import DynamicCardCollapsible from "./DynamicCardCollapsible";

export default function CardHolderEndpointBurnBlock(fullBitcoinHash) {
    
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
                //console.log(jsonData);
                
                const burnBlockContainer = new BurnBlockContainer(jsonData['results'][0]);
                console.log(burnBlockContainer.toJson());
                setContainer(burnBlockContainer.getData());
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