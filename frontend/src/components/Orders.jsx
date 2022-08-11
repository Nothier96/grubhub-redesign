import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";

const Orders = ({ order }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={order.image} />
      <Card.Body>
        <Card.Title>{order.name}</Card.Title>
        <Card.Text>{order.description}</Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <strong>
              {" "}
              <h3>${order.price}</h3>
            </strong>
          </div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={order.rating} />
          </div>
        </Card.Text>
        <Button variant="primary">Order</Button>
      </Card.Body>
    </Card>
  );
};

export default Orders;
