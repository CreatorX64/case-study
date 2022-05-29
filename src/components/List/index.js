import { StyledList } from "components/List/styles";
import ListItem from "components/ListItem";

const List = ({ items }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};

export default List;
