interface Data {
  name: string;
  description: string;
  value: number;
  type: Array<{ id: string; name: string }>;
  quantity: number
  image: string;
  id: string;
}

import Express from './assets/coffee-expresso.svg'
import AmericanExpress from "./assets/coffe-americano.svg";
import CreamyExpress from "./assets/coffee-expresso-cremoso.svg";
import ColdExpress from "./assets/coffee-cafe-gelado.svg";
import ComLeite from "./assets/coffee-cafe-com-leite.svg";
import Latte from "./assets/coffee-latte.svg";
import Capuccino from "./assets/coffee-capuccino.svg";
import Macchiato from "./assets/coffee-macchiato.svg";
import Mocaccino from "./assets/coffee-mochaccino.svg";
import ChocolateQuente from "./assets/coffee-chocolate-quente.svg";
import Cubano from "./assets/coffee-cubano.svg";
import Havaiano from "./assets/coffee-havaiano.svg";
import Arabe from "./assets/coffee-arabe.svg";
import Irlandes from "./assets/coffee-irlandes.svg";

export const api: Data[] = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: 990,
    type: [{ id: "1", name: "TRADICIONAL" }],
    quantity: 0,
    image: Express,
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: 990,
    type: [{ id: "1", name: "TRADICIONAL" }],
    quantity: 0,
    image: AmericanExpress,
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    value: 990,
    type: [{ id: "1", name: "TRADICIONAL" }],
    quantity: 0,
    image: CreamyExpress,
  },
  {
    id: "4",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "GELADO" },
    ],
    image: ColdExpress,
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: ComLeite,
  },
  {
    id: "6",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: Latte,
  },
  {
    id: "7",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: Capuccino,
  },
  {
    id: "8",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: Macchiato,
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "TRADICIONAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: Mocaccino,
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "ESPECIAL" },
      { id: "2", name: "COM LEITE" },
    ],
    image: ChocolateQuente,
  },
  {
    id: "11",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "ESPECIAL" },
      { id: "2", name: "ALCOÓLICO" },
      { id: "3", name: "GELADO" },
    ],
    image: Cubano,
  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    value: 990,
    type: [{ id: "1", name: "ESPECIAL" }],
    quantity: 0,
    image: Havaiano,
  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: 990,
    quantity: 0,
    type: [
      { id: "1", name: "ESPECIAL" },
      { id: "2", name: "ALCOÓLICO" },
    ],
    image: Arabe,
  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 990,
    type: [{ id: "1", name: "ESPECIAL" }],
    quantity: 0,
    image: Irlandes,
  },
];