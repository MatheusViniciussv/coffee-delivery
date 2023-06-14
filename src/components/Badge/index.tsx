import { Container } from "./styles"

interface BadgeProps {
  count: number
}

export function Badge({ count }: BadgeProps) {
  return (
    <Container>
      {count}
    </Container>
  )
}