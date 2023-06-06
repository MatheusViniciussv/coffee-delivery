import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;

  color: ${(props) => props.theme["base-title"]};

  background: ${(props) => props.theme["base-button"]};
`;

interface ButtonRadiusDirection {
  radiusDiraction: "left" | "right";
  
}
export const CounterButton = styled.button<ButtonRadiusDirection>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: ${(props) =>
    props.radiusDiraction === "left" ? "6px 0 0 6px" : "0 6px 6px 0"};

  padding: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
