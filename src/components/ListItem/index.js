import {
  StyledAddButton,
  StyledListItem,
  StyledStar
} from "components/ListItem/styles";
import iconLocation from "icons/location.svg";
import { useCartContext } from "context/cart";

const ListItem = ({ item }) => {
  const { addToCart, removeFromCart, itemInCart } = useCartContext();
  const isItemInCart = itemInCart(item);

  return (
    <StyledListItem>
      <figure>
        <img src={item.imageUrl} alt={item.name} />
      </figure>

      <section>
        <p className="title">{item.name}</p>
        <p className="description">{item.description}</p>
        <p className="info">
          <span className="info-item">
            <StyledStar rating={item.rating} aria-hidden />
            <span>{item.rating}</span>
          </span>
          <span className="info-item">
            <img src={iconLocation} alt="Location icon" aria-hidden />
            <span>{item.distance}</span>
          </span>
        </p>
        <StyledAddButton
          onClick={
            isItemInCart ? () => removeFromCart(item) : () => addToCart(item)
          }
        >
          {isItemInCart ? "Remove from cart" : "Add to cart"}
        </StyledAddButton>
      </section>
    </StyledListItem>
  );
};

export default ListItem;
