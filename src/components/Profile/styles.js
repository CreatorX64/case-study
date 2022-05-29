import styled from "styled-components";

export const StyledWrapper = styled.div`
  & h2 {
    font-size: 36px;
    margin: 0 0 32px 0;
  }

  & section {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 44px;
  }

  @media (min-width: 500px) {
    & section {
      font-size: 16px;
    }
  }
`;
