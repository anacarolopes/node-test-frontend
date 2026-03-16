import { useEffect, useState } from "react"
import type { IProduto } from "../types/produtos"
import { getProdutos } from "../services/ProdutosService"

export function useProdutos() {

  const [produtos, setProdutos] = useState<IProduto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    async function fetchProdutos() {
      try {

        const data = await getProdutos()
        setProdutos(data)

      } catch {

        setError("Erro ao carregar produtos")

      } finally {

        setLoading(false)

      }
    }

    fetchProdutos()

  }, [])

  return {
    produtos,
    loading,
    error
  }
}