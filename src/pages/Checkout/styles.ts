import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;

  form {
    display: grid;

    grid-template-columns: 70% 1fr;

    padding: 4rem 0 0;
    gap: 2rem;
  }
`;

export const CompletedOrder = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.375rem;

  h3 {
    font-size: 18px;
    font-family: "Baloo 2";
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

export const CartCoffee = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.375rem;

  h3 {
    font-size: 18px;
    font-family: "Baloo 2";
  }
`;
export const CartContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px 44px 6px 44px;

  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};

  a {
    text-decoration: none;
  }
`;


export const Purchase = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 1rem 0;

  border: 0;
  border-radius: 6px;

  font-size: 14px;
  font-weight: bold;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  transition: 100ms;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;