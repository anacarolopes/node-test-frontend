import type { IProduto } from "../../types/produtos"

interface Props {
  produto: IProduto
}

export function ProductCard({ produto }: Props) {

  return (
    <div>

      <p>{produto.name}</p>

      <p>R$ {produto.price}</p>

      <p>
        {produto.address.street}, {produto.address.number}
      </p>

      <p>{produto.address.state}</p>

    </div>
  )

}