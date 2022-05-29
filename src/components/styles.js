// Includes shared styled-components

import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  padding: 18px 0;
  font-weight: 700;
  font-size: 14px;
  transition: background-color 400ms;
  cursor: pointer;
  color: var(--color-primary);
  background-color: transparent;

  & > img {
    position: absolute;
    display: none;
    top: 50%;
    right: 14px;
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
      border-color: transparent;
      color: var(--color-white);
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
