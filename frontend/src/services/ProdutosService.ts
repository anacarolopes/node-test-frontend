import api from "./api"
import type { IProduto } from "../types/produtos"

export async function getProdutos(): Promise<IProduto[]> {
  const response = await api.get<IProduto[]>("/produtos")
  return response.data
}