import styled, { css } from 'styled-components'


export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 2.5rem;

  gap: 2rem;

  background: ${(props) => props.theme["base-card"]};
`;

export const PaymentHeader = styled.div`
  display: flex;

  gap: 0.5rem;

  h4 {
    font-size: 16px;
    font-weight: normal;
  }

  span {
    font-size: 14px;
  }
`;

export const Conditions = styled.div`
  display: flex;

  gap: 0.75rem;
`;

interface PaymentButtonProps {
  isSelected: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1.25rem;

  gap: 0.5rem;

  border-radius: 8px;

  border: 1px solid transparent;
  background: ${(props) => props.theme["base-button"]};

  span {
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  ${(props) =>
    props.isSelected &&
    css`
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
    `}
`;