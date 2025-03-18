import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export default function BlockCard(
    { 
      hash,
      height,
      block_time_iso,
      burn_block_hash,
      burn_block_height }
) {

  return (
    <Card className="border border-white text-start p-3" 
           style={{ width: '30rem' }}>
        <Card.Body>
        <Card.Text>
            <p class="text-start">{hash}</p>
            <p class="text-start">{height}</p>
            <p class="text-start">{block_time_iso}</p>
            <p class="text-start">{burn_block_hash}</p> 
            <p class="text-start">{burn_block_height}</p>
        </Card.Text>
        </Card.Body>
    </Card>
  );
}