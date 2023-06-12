import { CoffeContent, Container } from "./styles";

import { Card } from "./Card";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export function Catalog() {

  const { catalog } = useContext(CartContext)

  return (
    <Container>
      <h3>Nossos cafés</h3>

      <CoffeContent>
        {catalog.map((coffee) => (
          <Card key={coffee.id} data={coffee} />
        ))}
      </CoffeContent>
    </Container>
  )
}