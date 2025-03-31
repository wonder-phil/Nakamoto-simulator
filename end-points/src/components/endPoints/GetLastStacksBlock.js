import { useEffect, useState } from "react";

import StacksBlock from "../coreContainers/StacksBlock";
import RoutesAndEndpoints from "./RoutesAndEndpoints";

 export default function GetLastStacksBlock() {
    
    const [container, setContainer] = useState(null);

    useEffect(() => {

        const API_LAST_STACKS_BLOCK_URL = RoutesAndEndpoints.ROUTE_LAST_STACKS_BLOCK;

        async function fetchData() {
            try {
                const response = await fetch(API_LAST_STACKS_BLOCK_URL, {
                    headers: {
                      'Content-Type': 'text/javascript; charset=utf-8'
                    }
                  });
                const jsonData = await response.json();
                
                // Fill the container with JSON data
                const stacksBlock = new StacksBlock(jsonData);
                setContainer(stacksBlock);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h2>Stacks Data</h2>
            {container ? (
                <h6>{container.toJson()}</h6>
            ) : (
                <p>Loading...is the PROXY running?</p>
            )}
        </div>
    );
}

