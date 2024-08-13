import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
} from "../../Redux Toolkit/slices/cartSlice";
function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <div className="Cart">
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
          Welcome to Cart
        </h1>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <Table className="mt-4" bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{product.price}$</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Button
                      onClick={() => {
                        dispatch(removeFromCart(product));
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
          Total - {totalPrice.toFixed(2)}$
        </h3>
      </Container>
    </div>
  );
}

export default Cart;
