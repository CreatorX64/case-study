import styled from "styled-components";
import { css } from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  padding-block: 16px;

  & figure {
    position: relative;
    margin: 0;
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    border-radius: 12px;
    overflow: hidden;
  }

  & figure::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.8) 84%
    );
  }

  & figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 400ms transform;
  }

  & figure:hover img {
    transform: scale(1.1);
  }

  & section p {
    margin: 0;
  }

  & section .title {
    margin: 0 0 4px 0;
    font-weight: 700;
    color: var(--color-gray-900);
  }

  & section .description {
    font-size: 12px;
    color: var(--color-gray-700);
    margin-bottom: 12px;
  }

  & section .info {
    margin-bottom: 24px;
    display: flex;
    gap: 22px;
    font-size: 12px;
    color: var(--color-gray-900);
  }

  & section .info-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (min-width: 500px) {
    gap: 24px;
    padding-block: 32px;

    & figure {
      width: 160px;
      height: 160px;
    }

    & section .title {
      font-size: 20px;
      margin-bottom: 8px;
    }

    & section .description {
      font-size: 14px;
      margin-bottom: 16px;
    }

    & section .info {
      font-size: 14px;
    }
  }
`;

export const StyledAddButton = styled.button`
  border: none;
  background: none;
  background-image: url("/add-to-basket.svg");
  background-repeat: no-repeat;
  background-position: left center;
  padding: 8px 8px 8px 28px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.9px;
  font-weight: 700;
  color: var(--color-primary);

  @media (min-width: 500px) {
    font-size: 14px;
  }
`;

export const StyledStar = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ecd03f;

    ${(props) =>
      props.rating &&
      css`
        transform: translateY(${100 - (props.rating / 5) * 100}%);
      `}
  }

  @media (min-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;
