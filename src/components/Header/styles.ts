import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const ActionsContent = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 8px;
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 8px;

  background: ${(props) => props.theme["purple-light"]};

  image {
    background: ${(props) => props.theme["purple"]};
    color: ${(props) => props.theme["purple"]}
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;