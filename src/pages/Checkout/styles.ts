import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: grid;

  grid-template-columns: 70% 1fr;

  padding: 4rem 0 0;
  gap: 2rem;
`;

export const CompletedOrder = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.375rem;

  h3 {
    font-size: 18px;
    font-family: "Baloo 2";
  }

  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    grid-template-areas:
      "tp tp tp tp"
      "adt adt adt adt"
      "adm adm adm adm"
      "adb adb adb adb";

    .header {
      display: grid;
      width: 25%;
      grid-area: tp;
    }

    .address-top {
      width: 100%;
      grid-area: adt;
    }

    .address-mid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      width: 100%;
      grid-area: adm;
      background: ${(props) => props.theme["base-card"]};
    }

    .address-bottom {
      display: grid;
      grid-template-columns: 2fr 2.9fr 1fr;
      gap: 1rem;
      width: 100%;
      grid-area: adb;
      background: ${(props) => props.theme["base-card"]};
    }
  }
`;

export const FormInput = styled.input`
  padding: 1rem;

  width: 100%;

  border-radius: 8px;

  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 2.5rem;

  gap: 2rem;

  background: ${(props) => props.theme["base-card"]};
`;

export const LocationHeader = styled.div`
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
  isSelected: boolean
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

export const CartCoffee = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.375rem;

  h3 {
    font-size: 18px;
    font-family: "Baloo 2";
  }
`;