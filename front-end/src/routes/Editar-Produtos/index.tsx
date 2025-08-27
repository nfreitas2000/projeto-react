import { useNavigate, useParams } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"

export default function EditarProdutos(){

    const lista = listaProdutos;
    const navegacao = useNavigate();
    const {id} = useParams()
    const nid: number = Number(id ?? 0)

    const proc = lista.filter(prod => prod.id == nid)
    const produto = proc[0]

    const salvar = () => {
        alert(`Produto "${produto.nome}" atualizado com sucesso!`)
        return navegacao("/produtos")
    }

    return(
        <main>
            <h1>Editar Produtos</h1>

            <p>Editando os dados do produto: {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}