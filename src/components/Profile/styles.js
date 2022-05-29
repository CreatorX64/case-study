import styled from "styled-components";

export const StyledWrapper = styled.div`
  & h2 {
    margin: 0 0 32px 0;
    font-size: 36px;
  }

  & section {
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 44px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
  }

  @media (min-width: 500px) {
    & section {
      font-size: 16px;
    }
  }
`;
