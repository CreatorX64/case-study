import { useTranslation } from "react-i18next";

import { useCartContext } from "context/cart";
import { StyledWrapper } from "components/CartTotal/styles";

const CartTotal = () => {
  const { cartItems } = useCartContext();
  const { t } = useTranslation();

  const total = cartItems.reduce(
    (total, currItem) => (total += Number(currItem.price)),
    0
  );
  const taxesAndShipping = total === 0 ? 0 : 21.45;
  const grandTotal = total + taxesAndShipping;

  return (
    <StyledWrapper>
      <h2>{t("c.cartTotal.totalOfProducts")}:</h2>
      <p className="subtotal">
        {t("c.cartTotal.subtotal")}: {total.toFixed(2)} TL
      </p>
      <p className="extras">
        {t("c.cartTotal.taxesPlusShipping")}: {taxesAndShipping.toFixed(2)} TL
      </p>
      <p className="grand">
        {t("c.cartTotal.grandTotal")}: {grandTotal.toFixed(2)} TL
      </p>
    </StyledWrapper>
  );
};

export default CartTotal;
