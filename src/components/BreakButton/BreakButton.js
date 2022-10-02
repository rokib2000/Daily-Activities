import React from "react";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

const BreakButton = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <h3 className="my-4">Add A Break</h3>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => {
            handleClick(10);
          }}
          variant="light"
        >
          <span>10</span> min
        </Button>
        <Button
          onClick={() => {
            handleClick(20);
          }}
          variant="light"
        >
          <span>20</span> min
        </Button>
        <Button
          onClick={() => {
            handleClick(30);
          }}
          variant="light"
        >
          <span>30</span> min
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BreakButton;
