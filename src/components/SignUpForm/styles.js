import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const StyledButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
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
`;

export const StyledLabelWithInput = styled.label`
  display: block;
  position: relative;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(8px);
    color: var(--color-gray-700);
    transition: all 400ms;
  }

  & > input,
  & > select {
    display: block;
    width: 100%;
    border: none;
    font-weight: 600;
    outline: none;
    border-bottom: 2px solid var(--color-gray-300);
    padding: 8px 0;
  }

  & > select {
    border-bottom: 2px solid var(--color-gray-700);
  }

  & > input:focus {
    border-bottom: 2px solid var(--color-accent);
  }

  ${(props) =>
    props.moveLabel &&
    css`
    & > input + span,
  `}
  & > input:focus + span,
  & > select + span {
    font-size: 12px;
    color: var(--color-gray-600);
    transform: translateY(-14px);
  }
`;
