import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  h3 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeContent = styled.div`
  padding: 5rem 0;

  display: flex;

  gap: 2rem;
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};

  width: 16rem;

  img {
    margin-top: -1rem
  }
`;