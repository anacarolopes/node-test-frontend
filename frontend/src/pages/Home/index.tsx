import { useProdutos } from "../../hooks/useProdutos"
import { ProductCard } from "../../components/ProductCard"
import "./styles.css"

export function Home() {

  const { produtos, loading, error } = useProdutos()

  if (loading) return <p className="center">Carregando...</p>

  if (error) return <p className="center">{error}</p>

  return (
    <div className="container">

      <h1 className="title">Produtos</h1>

      <div className="products-grid">

        {produtos.map(produto => (
          <ProductCard
            key={produto.id}
            produto={produto}
          />
        ))}

      </div>

    </div>
  )
}