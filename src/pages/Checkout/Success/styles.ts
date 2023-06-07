import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;

  padding: 6.25rem 0 0;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
`;


export const Header = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Baloo 2";
    font-size: 2.5rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;


export const RequestDetails = styled.div`
  position: relative;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 35rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6px 40px 6px 40px;
    padding: 2px;
    background: linear-gradient(120deg, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#dbac2c, #8047f8) content-box,
      linear-gradient(#dbac2c, #8047f8);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface IconColor {
  color: 'yellow' | 'yellow-dark' | 'purple'
}

export const Icon = styled.div<IconColor>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme[props.color]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div {
    display: flex;
    gap: 0.4rem;
  }
`;

export const Image = styled.div`
  display: flex;
  margin-bottom: -1rem;
  justify-content: end;
`;