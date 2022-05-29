import { useCartContext } from "context/cart";
import { StyledWrapper } from "components/CartTotal/styles";

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
      <p className="extras">Taxes + Shipping: {total === 0 ? 0 : 21.45} TL</p>
      <p className="grand">Grand Total: {(total + 21.45).toFixed(2)} TL</p>
    </StyledWrapper>
  );
};

export default CartTotal;
