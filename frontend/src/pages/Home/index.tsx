import { useProdutos } from "../../hooks/useProdutos"
import { ProductCard } from "../../components/ProductCard"

export function Home() {

  const { produtos, loading, error } = useProdutos()

  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>

      {produtos.map(produto => (

        <ProductCard
          key={produto.id}
          produto={produto}
        />

      ))}

    </div>
  )
}