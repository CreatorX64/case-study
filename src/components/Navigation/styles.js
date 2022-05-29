import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 88px;
  color: var(--color-black);
  background-color: var(--color-gray-100);

  & ul {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    gap: 90px;
    width: max-content;
    height: 48px;
    padding: 0;
    margin-inline: auto;
    list-style: none;
  }

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }

  & a span {
    margin-top: auto;
    font-size: 12px;
    font-weight: 600;
  }
`;