import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/*
  Burn block example
*/

export default function DynamicCardCollapsible ({ props }) {

  const [open, setOpen] = useState(false);
  const myList =  Object.entries(props);
  const firstThree = myList.slice(0, 3);
  const theRest = myList.slice(3);

  return (

    <div className="card custom-card border-primary mb-3">
    <Card style={{ maxWidth: "700px", margin: "auto" }} className="container ms-0" >
      <Card.Body>
        <Card.Title><h3>{props['card_title']}</h3></Card.Title>
        <ul className="list-group list-group-flus no-bullets">
          <li className="list-group-item text-primary">
            <Button
              onClick={() => setOpen(!open)}
              className="mb-2"
              >
              <h6>{open ? props['button_open'] + ": " + props[props['button_open']] :  props['button_closed'] + ": " + props[props['button_closed']] }</h6>
          </Button>
          </li>
            <ul className="no-bullets">  <h6> 
                {firstThree.map(([key, value]) => (
                    <li key={key}>
                        {key}: {JSON.stringify(value)}
                    </li>
                ))}
                </h6>
            </ul>
            
            <Collapse in={open}>
              <div id="collapse-text">
                {open ? <h6> 
                {theRest.map(([key, value]) => (
                      <li key={key}>
                          {key}: {JSON.stringify(value)}
                      </li>
                  ))}
                </h6> : <p>Loading ...</p>}
              </div>
        </Collapse>
        </ul>
      </Card.Body>
    </Card>
    </div>
  );
};


