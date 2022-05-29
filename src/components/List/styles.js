import styled from "styled-components";
import { StyledListItem } from "components/ListItem/styles";

export const StyledList = styled.ul`
  display: grid;
  row-gap: 24px;
  margin-top: 0;
  padding: 0;
  list-style: none;

  /* Bottom borders in the Figma file were inconsistent, so I decided to add it
  to all elements except the last one. */
  /* & ${StyledListItem}:not(:last-child) { */

  /* But then, I changed my mind... */
  & ${StyledListItem} {
    border-bottom: 1px solid var(--color-gray-200);
  }

  @media (min-width: 500px) {
    row-gap: 0;
  }
`;
