import styled, { css } from "styled-components";

export const StyledLocalePicker = styled.label`
  display: block;
  position: relative;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 400ms;
    font-size: 12px;
    color: var(--color-gray-600);
    transform: translateY(-14px);
  }

  & > select {
    display: block;
    width: 100%;
    border: none;
    font-weight: 600;
    outline: none;
    border-bottom: 2px solid var(--color-gray-700);
    padding: 8px 0;
  }

  ${(props) =>
    props.moveLabel &&
    css`
    & > input + span,
  `}
  & > input:focus + span,
  & > select + span {
  }
`;
