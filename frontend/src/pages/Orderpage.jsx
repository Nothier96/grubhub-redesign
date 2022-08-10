import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
function Orderpage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fecthOrder = async () => {
      const { data } = await axios.get("/orders");
      setOrders(data);
    };
    fecthOrder();
  });
  return <div>Orderpage</div>;
}

export default Orderpage;
