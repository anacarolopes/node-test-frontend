import type { IProduto } from "../../types/produtos"
import "./styles.css"

interface Props {
  produto: IProduto
}

export function ProductCard({ produto }: Props) {

  return (
    <div className="product-card">

      <h2 className="product-name">{produto.name}</h2>

      <p className="product-price">
        R$ {produto.price.toFixed(2)}
      </p>

      <p className="product-description">
        {produto.description}
      </p>

      <p className="product-address">
        {produto.address.street}, {produto.address.number}
      </p>

      <span className="product-state">
        {produto.address.state}
      </span>

    </div>
  )
}