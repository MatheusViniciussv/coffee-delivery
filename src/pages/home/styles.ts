import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 8rem 0;
  gap: 2rem;

  background: repeating-radial-gradient(
    ${(props) => props.theme["yellow-light"]},
    ${(props) => props.theme["purple-light"]},
    ${(props) => props.theme["purple-light"]},
    ${(props) => props.theme["background"]},
    ${(props) => props.theme["background"]},
    ${(props) => props.theme["background"]}
  ) repeat;

  background-color: blur(23rem);
`;

export const Content = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 48px;
    font-family: "Baloo 2";
    line-height: 3.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 20px;
    font-family: "Roboto" sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ItemsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 5rem;
`;

const IMAGE_BACKGROUND_COLOR = {
  orange: 'yellow-dark' ,
  gray: 'base-text',
  yellow: 'yellow',
  purple:  'purple'
} as const

interface ItemColorProps {
  color: keyof typeof IMAGE_BACKGROUND_COLOR;
}

export const Item = styled.div<ItemColorProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 100px;
    background-color: ${(props) => props.theme[IMAGE_BACKGROUND_COLOR[props.color]]};
  }

  span {
    font-size: 16px;
    color: ${(props) => props.theme["base-text"]};
  }
`;