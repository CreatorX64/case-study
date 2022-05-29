import { useTranslation } from "react-i18next";

import { useCartContext } from "context/cart";
import { StyledWrapper } from "components/CartTotal/styles";
import { useUserContext } from "context/user";

const CartTotal = () => {
  const { locale } = useUserContext();
  const { cartItems } = useCartContext();
  const { t } = useTranslation();

  const total = cartItems.reduce(
    (total, currItem) => (total += Number(currItem.price)),
    0
  );
  const taxesAndShipping = total === 0 ? 0 : 21.45;
  const grandTotal = total + taxesAndShipping;

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "TRY"
  });

  return (
    <StyledWrapper>
      <h2>{t("c.cartTotal.totalOfProducts")}:</h2>
      <p className="subtotal">
        {t("c.cartTotal.subtotal")}: {formatter.format(total)}
      </p>
      <p className="extras">
        {t("c.cartTotal.taxesPlusShipping")}: {formatter.format(taxesAndShipping)}
      </p>
      <p className="grand">
        {t("c.cartTotal.grandTotal")}: {formatter.format(grandTotal)}
      </p>
    </StyledWrapper>
  );
};

export default CartTotal;
