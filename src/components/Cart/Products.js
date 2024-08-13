import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux Toolkit/slices/productsSlice";
import { addToCart } from "../../Redux Toolkit/slices/cartSlice";
function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
//   console.log(products);
//   console.log(useSelector((state) => state.cart));
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    
    <Container style={{
        marginTop: "4rem",
      }}>
      <Row>
        {products.map((product, i) => {
          return (
            <Col key={i}>
              <Card
                style={{
                  width: "19rem",
                  marginTop: "1.4rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "8rem",
                    height: "8rem",
                    margin: "1.5rem auto 0.5rem",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      height: "3.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {product.title.slice(0, 34)}
                  </Card.Title>
                  <Card.Title style={{ margin: "0.8rem 0" }}>
                    $ {product.price}
                  </Card.Title>
                  <Card.Text style={{ height: "5rem" }}>
                    {product.description.slice(0, 92)}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
