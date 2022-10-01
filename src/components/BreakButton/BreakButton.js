import React from "react";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

const BreakButton = () => {
  return (
    <div>
      <h3 className="my-4">Add A Break</h3>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light">
          <span>10</span>min
        </Button>
        <Button variant="light">
          <span>20</span>min
        </Button>
        <Button variant="light">
          <span>30</span>min
        </Button>
        <Button variant="light">
          <span>40</span>min
        </Button>
        <Button variant="light">
          <span>50</span>min
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BreakButton;
