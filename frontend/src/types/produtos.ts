export enum States {
  MG = "Minas Gerais",
  SP = "São Paulo",
  RJ = "Rio de Janeiro",
  BA = "Bahia",
  ES = "Espírito Santo"
}

export interface IAddress {
  street: string
  number: number
  state: States
}

export interface IProduto {
  id: number
  name: string
  price: number
  description?: string
  address: IAddress
}