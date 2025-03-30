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
    <Card className="border border-white small-text text-start p-3"
           style={{ width: '30rem' }}>
        <Card.Body>
        <Card.Text>
            <p className="text-start">Hash: {hash}</p>
            <p className="text-start">Hight: {height}</p>
            <p className="text-start">Date: {block_time_iso}</p>
            <p className="text-start">Burn block hash: {burn_block_hash}</p> 
            <p className="text-start">Burn block height: {burn_block_height}</p>
        </Card.Text>
        </Card.Body>
    </Card>
  );
}