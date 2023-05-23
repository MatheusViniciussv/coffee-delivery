import { CoffeContent, Container } from "./styles";

import { api } from '../../../api'
import { Card } from "./Card";

export function Catalog() {
  return (
    <Container>
      <h3>Nossos cafés</h3>

      <CoffeContent>
        {api.map((coffee) => (
          <Card data={coffee} />
        ))}
      </CoffeContent>
    </Container>
  )
}