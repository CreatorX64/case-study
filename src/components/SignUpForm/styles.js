import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 46px;
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
