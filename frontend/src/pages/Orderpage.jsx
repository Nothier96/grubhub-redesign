import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
// import { Link } from "react-router-dom";
import Orders from "../components/Orders";
function Orderpage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fecthOrder = async () => {
      const { data } = await axios.get("/orders");
      setOrders(data);
    };
    fecthOrder();
  }, []);
  // console.log(orders[0]);
  return (
    <Container>
      <Row>
        {orders.map((order) => (
          <Col key={order.product_id} sm={12} md={6} lg={4} xl={3}>
            <Orders order={order} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Orderpage;
