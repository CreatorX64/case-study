import styled from "styled-components";
import { useCartContext } from "context/cart";

const StyledWrapper = styled.section`
  padding: 38px 0;

  & h2 {
    margin: 0 0 16px 0;
    font-size: 24px;
  }

  & .subtotal,
  & .extras {
    font-size: 14px;
    margin: 12px 0;
  }

  & .grand {
    font-size: 18px;
    font-weight: 700;
  }
`;

const CartTotal = () => {
  const { cartItems } = useCartContext();

  const total = cartItems.reduce(
    (total, currItem) => (total += Number(currItem.price)),
    0
  );

  return (
    <StyledWrapper>
      <h2>Total of Products:</h2>
      <p className="subtotal">Subtotal: {total.toFixed(2)} TL</p>
      <p className="extras">Taxes + Shipping: 21.45 TL</p>
      <p className="grand">Grand Total: {(total + 21.45).toFixed(2)} TL</p>
    </StyledWrapper>
  );
};

export default CartTotal;
