import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";

export default function Produtos(){
    return(
        <main>
            <h1>Produtos</h1>
            {
                listaProdutos.map((prod)=>(
                    <div key={prod.id}>
                        <Link to={`/produtos/editar/${prod.id}`}>Editar produtor: {prod.nome} - Preço: R${prod.preco},00</Link>
                    </div>
                ))
            }
        </main>
    )
}