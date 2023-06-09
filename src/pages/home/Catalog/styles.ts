import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 6.5rem 0 0;

  h3 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeContent = styled.div`
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  row-gap: 2.5rem;

  @media (min-width: 1360px) and (max-width: 1680px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1140px) and (max-width: 1360px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 800px) and (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentCard = styled.div`
  width: 16rem;

  padding: 0 1.5rem 1.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.875rem;

  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px 44px 6px 44px;

  img {
    margin-top: -1.6rem;
  }
`;

export const CardTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const CardType = styled.div`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow"]};
  border-radius: 20px;

  padding: 0.5rem 0.625rem;
  font-weight: bold;
  font-size: 10px;
`;



export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  gap: 0.5rem;

  strong {
    line-height: 1.5rem;
    font-size: 20px;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CardBuy = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;

  span {
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
  }

  strong {
    font-size: 24px;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  transition: 100ms;

  border: 0;

  background: ${(props) => props.theme["purple-dark"]};

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;