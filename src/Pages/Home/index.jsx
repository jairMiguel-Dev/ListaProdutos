import { useState, useRef } from "react";
import ItemLista from "../../components/ItemLista";
import Button from "../../components/Ui/Button.jsx";
import Input from "../../components/Ui/Input.jsx"

function Home(){
    const [listaMercado, setListaMercado] = useState([]); 
    const inputAdicionar = useRef(); // UseReferência para o input de adicionar item
    // const listaMercado = [];

    // console.log(inputAdicionar.current);

    const adicionarElementosNaLista = () => { 
        const novaLista = [...listaMercado]; // Cria uma cópia da lista atual
        const valorInput = inputAdicionar.current.value; // Obtém o valor do input

        if (valorInput) { // Verifica se o valor do input não está vazio
            novaLista.push(valorInput); // Adiciona o novo item à cópia da lista
            inputAdicionar.current.value = "";  // Limpa o valor do input após adicionar 
        }
        
        setListaMercado(novaLista); // Atualiza o estado com a nova lista
    }

    const totalProdutos = listaMercado.length;

    return (
        <div className="text-center bg-gray-200 h-screen w-screen"> 
        <h1 className="text-4xl bg-blue-950 text-white px-8 py-2 rounded">Lista de Produto</h1>
        <p className="bg-green-600 text-white px-4 py-1 rounded text-2xl">
            Total de itens na lista: {totalProdutos}
        </p>
        <div className="justyfi-center bg-blue-950 p-10">
        <Input ref={inputAdicionar} type="text" placeholder="Digite um item"/>
        <Button onClick={() => adicionarElementosNaLista()}>Adicionar</Button>
        </div>
        
        <div className=" bg-blue-950 p-5 text-white text-2xl">
        {listaMercado.length > 0 ? <ul>
            {listaMercado.map((itemLista, index) => 
                <ItemLista key={index} itemLista={itemLista} listaMercado={listaMercado} setListaMercado={setListaMercado}/>
            )
            }
        </ul> : (<p>Nenhum item na lista</p>)}
        </div>
        
        </div>
    )
};

export default Home;