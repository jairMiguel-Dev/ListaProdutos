import { useState, useRef } from "react";
import ItemLista from "../../components/ItemLista";

function Home(){
    const [listaMercado, setListaMercado] = useState([]);
    // const listaMercado = [];

    const inputAdicionar = useRef();
    console.log(inputAdicionar.current);

    // useState - Cria uma variavel de estado
        // Ele não retorna uma informação
        // ele retorna um array [a variavel que armazena a informação, uma função para alterar essa informação]

    //useRef - Cria uma referencia para um elemento HTML

    const adicionarElementosNaLista = () => {
        const novaLista = [...listaMercado];
        const valorInput = inputAdicionar.current.value;

        if (valorInput) {
            novaLista.push(valorInput);
            setListaMercado(novaLista);
    
            inputAdicionar.current.value = "";   
        }

        // console.log(listaMercado);
        
        setListaMercado(novaLista);
        // listaMercado.push = novoItem;

        // listaMercado.push("Novo Item");
    }

    return (
        <div>
        <h1>Lista de Mercado</h1>
        <input ref={inputAdicionar} type="text" placeholder="Digite um item"/>
        <button onClick={() => adicionarElementosNaLista()}>Adicionar</button>

        {listaMercado.length > 0 ? <ul>
            {listaMercado.map((itemLista, index) => 
                <ItemLista key={index} itemLista={itemLista} listaMercado={listaMercado} setListaMercado={setListaMercado}/>
            )
            }
        </ul> : (<p>Nenhum item na lista</p>)}
        
        </div>
    )
};

export default Home;
