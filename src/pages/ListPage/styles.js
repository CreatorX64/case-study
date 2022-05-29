import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  max-width: 400px;
  margin: auto;

  @media (min-width: 500px) {
    max-width: 480px;
  }

  @media (min-width: 1010px) {
    max-width: 840px;
    column-gap: 56px;
    grid-template-columns: 1fr max-content;
  }
`;
