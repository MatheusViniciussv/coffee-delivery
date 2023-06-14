import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  padding: 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-size: 0.75rem;
  font-weight: bold;

  top: -10px;
  right: -11px;
`;