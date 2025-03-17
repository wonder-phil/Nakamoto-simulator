import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


export default function BlockCard(
    { height,
      hash,
      block_time_iso,
      tenure_height,
      burn_block_time_iso,
      burn_block_hash,
      burn_block_height,
      miner_tx_id,  }
) {

  console.log("block_time_iso = ", block_time_iso);
 
  return (
    <Card style={{ width: '80rem' }}>
    <Card.Body>
      {/* <Card.Title>{last5(hash)}</Card.Title> */}
      <Card.Text>
        <p class="text-start">{hash}</p>
        <p class="text-start">{height}</p>
        <p class="text-start">{block_time_iso}</p>
        <p class="text-start">{burn_block_hash}</p> 
        <p class="text-start">{burn_block_height}</p>
        <p class="text-start">{burn_block_time_iso}</p>
        <p class="text-start">{tenure_height}</p>
        <p class="text-start">{miner_tx_id}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  );
}