// Includes shared styled-components

import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 18px 0;
  transition: background-color 400ms;
  color: var(--color-primary);
  background-color: transparent;

  & > img {
    display: none;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);

    ${(props) =>
      props.isLoading &&
      css`
        display: block;
      `}
  }

  ${(props) =>
    props.isInvalid &&
    css`
      color: var(--color-white);
      border-color: transparent;
      background-color: var(--color-gray-500);
    `}

  ${(props) =>
    props.primary &&
    !props.isInvalid &&
    css`
      color: var(--color-white);
      background-color: var(--color-primary);
    `}

  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
