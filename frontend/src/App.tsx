import { useState, useEffect } from 'react'
import api from './services/api'

function App() {
  const [produtos, setProdutos] = useState<IProdutos[]>([])

  enum States {
    MG = "Minas Gerais",
    SP = "São Paulo"
}

interface IAddress{
    street: string;
    number: number;
    state: States
}

interface IProdutos {
    id: number;
    name: string;
    price: number;
    description?: string;
    address: IAddress;
}

useEffect(() => {

  async function getProdutos(){
    const response = await api.get<IProdutos[]>('/produtos')

    setProdutos(response.data)
  }

  getProdutos()

}, [])

  return (
    <div>
      {produtos.map(produto => (
        <div key={produto.id}>
          <p>{produto.name}</p>
          <p>R$ {produto.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
