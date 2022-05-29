import styled from "styled-components";

export const StyledLocalePicker = styled.label`
  position: relative;
  display: block;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    transform: translateY(-14px);
    transition: all 400ms;
    color: var(--color-gray-600);
  }

  & > select {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--color-gray-700);
    padding: 8px 0;
    font-weight: 600;
  }
`;
