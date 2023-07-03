import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  grid-template-areas:
    "tp tp tp tp"
    "adt adt adt adt"
    "adm adm adm adm"
    "adb adb adb adb";

  p {
    color: ${props => props.theme['yellow-dark']};
    font-size: 0.5;
  }

  input {
    padding: 1rem;

    width: 100%;

    border-radius: 8px;

    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  .header {
    display: grid;
    width: 25%;
    grid-area: tp;
  }

  .address-top {
    width: 100%;
    grid-area: adt;
  }

  .address-mid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    width: 100%;
    grid-area: adm;
    background: ${(props) => props.theme["base-card"]};
  }

  .address-bottom {
    display: grid;
    grid-template-columns: 2fr 2.9fr 1fr;
    gap: 1rem;
    width: 100%;
    grid-area: adb;
    background: ${(props) => props.theme["base-card"]};
  }
`;