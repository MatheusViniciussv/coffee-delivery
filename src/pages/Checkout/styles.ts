import styled from 'styled-components'

export const Content = styled.div`
  display: grid;

  grid-template-columns: 70% 1fr;

  padding: 8rem 0;
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 2fr 1fr 3fr;
    gap: 1rem;
  }
`;

export const FormInput = styled.input`
  padding: 1rem;

  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-label"]};

  border-radius: 8px;
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

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1.25rem;

  gap: 0.5rem;

  border-radius: 8px;

  border: 0;
  background: ${(props) => props.theme["base-button"]};

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme["base-label"]};
`;

export const CoffeCartContent = styled.div`
  display: flex;
`;