import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeContent = styled.div`
  padding: 5rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;

  gap: 2rem;
`;

export const ContentCard = styled.div`
  width: 16rem;

  padding: 0 2rem 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.875rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 8px 40px 8px 40px;

  img {
    margin-top: -1rem
  }
`;

export const CardType = styled.div`
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 10px;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow"]};
  border-radius: 20px;
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
  display: flex;
`;