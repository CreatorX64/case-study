import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const StyledLabelWithInput = styled.label`
  position: relative;
  display: block;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(8px);
    transition: all 400ms;
    color: var(--color-gray-700);
  }

  & > input,
  & > select {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--color-gray-300);
    padding: 8px 0;
    font-weight: 600;
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
