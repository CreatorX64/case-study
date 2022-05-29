import { StyledButton } from "components/styles";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 100;
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
    gap: 84px;
    width: max-content;
    height: 48px;
    padding: 0;
    margin-inline: auto;
    list-style: none;
  }

  & a {
    display: flex;
    flex-direction: column;
    min-width: 44px;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }

  & a span {
    margin-top: auto;
    font-size: 12px;
    font-weight: 700;
  }

  & ${StyledButton} {
    position: absolute;
    width: calc(100% - 48px);
    transform: translateY(calc(-130% - 18px));
  }

  @media (min-width: 500px) {
    position: static;
    min-height: max-content;
    padding: 20px 40px;
    display: flex;
    gap: 56px;

    & ul {
      width: 100%;
      max-width: 1024px;
      height: 52px;
      justify-content: flex-end;
      gap: 48px;
    }

    & a {
      min-width: 64px;
    }

    & a span {
      font-size: 16px;
    }

    & ${StyledButton} {
      /* position: static; */
      width: auto;
      /* align-self: center; */
      padding: 12px 24px;
      /* flex-shrink: 0; */
      transform: translateY(calc(210% + 12px));
    }
  }
`;
