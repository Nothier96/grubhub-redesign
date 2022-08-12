import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
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
      <Navbar1 />
      <Row>
        {orders.map((order) => (
          <Col key={order.product_id} sm={12} md={6} lg={4} xl={3}>
            <Orders order={order} />
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
}

export default Orderpage;
