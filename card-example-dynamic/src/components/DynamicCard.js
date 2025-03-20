import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function getLast20Chars(str) {
  return str.slice(-20);
}

const myHash="000000000000000000021befec5430136d47f2d7ca9e0b508a08693e82c18f63"

export default function DynamicCard ({ props }) {
  const entries = Object.entries(props);
  console.log(entries);

  const [open, setOpen] = useState(false);

  return (
    <div className="card custom-card border-primary mb-3">
    <Card style={{ maxWidth: "600px", margin: "auto" }} className="container ms-0" >
      <Card.Body>
        <Card.Title><h3>BTC height</h3></Card.Title>
        <ul className="list-group list-group-flus no-bullets">
          <li class="list-group-item text-primary">{open ? "Hash tail: " : "Hash: "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text"
              aria-expanded={open}
              className="mb-2"
              >
          {open ? <p>{getLast20Chars(myHash)}</p> :  <p>{myHash}</p>}
          </Button>
          </li>
          <ul>
                {Object.entries(props).map(([key, value]) => (
                    <li key={key}>
                        {key}: {JSON.stringify(value)}
                    </li>
                ))}
            </ul>
        </ul>
      </Card.Body>
    </Card>
    </div>
  );
};


