import React from "react";
import Card from "react-bootstrap/Card";

const QueAns = () => {
  return (
    <div>
      <h2 className="my-4">Question and Answer</h2>
      <Card className="text-start mb-3">
        <Card.Body>
          <Card.Title>1. How does react work?</Card.Title>
          <Card.Text>
            It designs common views for each state of your application and will update and render correctly with
            response efficiency when your data changes.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-start mb-3">
        <Card.Body>
          <Card.Title>2. What's the difference between state and props in React?</Card.Title>
          <Card.Text>
            The key difference between props and state is that state is internal and controlled by the component itself
            while props are external and controlled by whatever renders the component.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-start mb-3">
        <Card.Body>
          <Card.Title>3. How useEffect works in react?</Card.Title>
          <Card.Text>
            Use Effects hooks allow you to perform side effects on your components. Some examples of side effects are:
            fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QueAns;
