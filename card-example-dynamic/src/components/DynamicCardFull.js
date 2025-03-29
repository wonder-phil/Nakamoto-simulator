import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";




export default function DynamicCardFull ({ props }) {

  console.log("DynamicCardFull props: ", props);
  const [open, setOpen] = useState(false);

  return (
   <div className="card custom-card border-primary mb-3">
      <Card style={{ maxWidth: "700px", margin: "auto" }} className="container ms-0" >
      <Card.Body>
        <Card.Title><h3>{props['card_title']}</h3></Card.Title>
        <ul className="list-group list-group-flus no-bullets">
          <li className="list-group-item text-primary">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text"
              aria-expanded={open}
              className="mb-2">
              <h6>{open ? "Hash: " + props['hash'] :  "Hash tail: " + props['hash'].slice(-20) }</h6>
          </Button>
          </li>
          <ul className="list-group list-group-flus no-bullets">
                {Object.entries(props).map(([key, value]) => (
                    <li key={key}>
                        <h6>{key}: {JSON.stringify(value)}</h6>
                    </li>
                ))}
            </ul>
        </ul>
      </Card.Body>
    </Card>
    </div>
  );
};


