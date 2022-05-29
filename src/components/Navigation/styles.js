import { StyledButton } from "components/styles";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
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
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    list-style: none;
  }

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 44px;
    height: 100%;
    text-decoration: none;
    color: var(--color-black);
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
    display: flex;
    gap: 56px;
    min-height: max-content;
    padding: 20px 40px;

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
