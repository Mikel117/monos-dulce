import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: 'Piñata de Unicornio',
    price: 450,
    category: 'renta',
    image: 'https://via.placeholder.com/150x150?text=Unicornio'
  },
  {
    id: 2,
    name: 'Mesa de Dulces Rosa',
    price: 850,
    category: 'venta',
    image: 'https://via.placeholder.com/150x150?text=Mesa+Dulces'
  },
  {
    id: 3,
    name: 'Moño para Auto',
    price: 120,
    category: 'venta',
    image: 'https://via.placeholder.com/150x150?text=Mo%C3%B1o'
  },
  {
    id: 4,
    name: 'Centro de Mesa de Globo',
    price: 300,
    category: 'renta',
    image: 'https://via.placeholder.com/150x150?text=Centro+Globo'
  }
]
