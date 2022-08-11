import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Orders = ({ order }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={order.image} />
      <Card.Body>
        <Card.Title>{order.name}</Card.Title>
        <Card.Text>{order.description}</Card.Text>
        <Button variant="primary">Order</Button>
      </Card.Body>
    </Card>
  );
};

export default Orders;
