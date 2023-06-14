import { Container } from "./styles"

interface BadgeProps {
  count: number
  color?: string
}

export function Badge({ count, color }: BadgeProps) {
  return (
    <Container>
      {count}
    </Container>
  )
}