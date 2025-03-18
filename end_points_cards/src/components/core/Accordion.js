import React, { useState, useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import BitcoinBlock from '../core/BitcoinBlockCard';
import BitcoinBlockCard from '../core/BitcoinBlockCard';

import  btcFields  from './btcFields';


const last5characters = (str) => {
  return str.length > 5 ? str.slice(-5) : "";
}

const firstXcharacters = ({x,str}) => {
  return str.length > x ? str.slice(0, x) : "";
}


export default function MyAccordion(blockHashArg) {

  const blockHash = blockHashArg.myBlockHash;
  console.log("blockHash = ", blockHash);
  //const myBlockHash = ;
  const [blockData, setBlockData] = useState(null);
  const [burnBlockData, setBurnBlockData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);  
        
  useEffect(() => {

    const fetchBlockData = async () => {
          try { 

            console.log("HERE IS THE BLOCK HASH: ", blockHash);
            console.log("HERE IS THE BLOCK HASH: ", blockHash);
            fetch("http://127.0.0.1:5000/api/block/"+blockHash)
            .then(response => response.json())
            .then(data => { console.log("1 data = ",data);
                             
                    setBlockData(data);
                  }).catch(error => console.error(error));
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
      }

      const fetchBurnBlockData = async (burn_block_hash) => {
        try { 

          fetch("http://127.0.0.1:5000//api/burnblock/0x00000000000000000000bb985beebfb73a2f36993b9a32e211c4e2fe16e8ca57")
          .then(response => response.json())
          .then(data => { console.log("1 data = ",data);
                  setBurnBlockData(data);
                })
          .catch(error => console.error(error));
          } catch (e) {
              setError(e);
          } finally {
              setLoading(false);
          }
    }

      
      
    fetchBlockData();
    //fetchBurnBlockData(blockData && blockData['burn_block_hash'] ? blockData['burn_block_hash'] : "Loading...");
    }, []);
    

  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header><h2>Last five block hash values: {last5characters(blockHash)}</h2></Accordion.Header>
        <Accordion.Body>
          <BlockCard  hash={blockData && blockData['hash'] ? "Hash: " + blockData['hash'] : "Loading..."} 
                      height={blockData && blockData['height'] ? "Height: " + blockData['height'] : "Loading..."} 
                      block_time_iso={blockData && blockData['block_time_iso'] ? "Time: " +  blockData['block_time_iso'] : "Loading..."}
                      tenure_height={blockData && blockData['tenure_height'] ? "Tenure height: " + blockData['tenure_height'] : "Loading..."}
                      burn_block_hash={blockData && blockData['burn_block_hash'] ? "Burn block hash: " + blockData['burn_block_hash'] : "Loading..."}
                      burn_block_height={blockData && blockData['burn_block_height'] ? "Burn block height: " + blockData['burn_block_height'] : "Loading..."}          
          />
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header><h2>Last five burn block hash values of: {last5characters(blockHash)}</h2></Accordion.Header> 
        <Accordion.Body>
            <BlockCard  burn_block_hash={blockData && blockData['burn_block_hash'] ? "Burn block hash: " + blockData['burn_block_hash'] : "Loading..."} 
                        
            />
        </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  );
} 


/*
// last5characters(burnBlockData)
{burnBlockData && burnBlockData['hash'] ? "Hash: " + burnBlockData['hash'] : "Loading..."}


   
          

*/