interface Data {
  title: string
  description: string
  value: number
  type: Array<string>
  image: string
  id: number
}

import Express from './assets/coffee-expresso.svg'
import AmericanExpress from "./assets/coffe-americano.svg";
import CreamyExpress from "./assets/coffee-expresso-cremoso.svg";
import ColdExpress from "./assets/coffee-cafe-gelado.svg";

export const api: Data[] = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: 9.9,
    type: ["TRADICIONAL"],
    image: Express,
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: 9.9,
    type: ["TRADICIONAL"],
    image: AmericanExpress,
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    value: 9.9,
    type: ["TRADICIONAL"],
    image: CreamyExpress,
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: 9.9,
    type: ['TRADICIONAL', 'GELADO'],
    image: ColdExpress,
  },
];