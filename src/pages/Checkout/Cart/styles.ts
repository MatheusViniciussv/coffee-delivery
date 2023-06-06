import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px 44px 6px 44px;

  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const Content = styled.div`
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
  }

  & + div {
    display: flex;
    gap: 1.25rem;
  }

  &:first-child {
    padding-top: 0;
  }
`;

export const Coffee = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > span {
      font-size: 1rem;
      color: ${(props) => props.theme['base-sbutitile']}
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.4rem 0.5rem;

  border-radius: 6px;
  border: 0;

  transition: 100ms;

  background: ${(props) => props.theme["base-button"]};

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: end;

  strong {
    color: ${(props) => props.theme['base-text']}
  }
`;

export const CartValue = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);

  padding: 1.5rem 0;

  strong {
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    span {
      font-size: 14px;
    }
  }

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    gap: 1rem;

    span {
      font-size: 16px;
    }
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