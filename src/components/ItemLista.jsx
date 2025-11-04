import React from 'react'

const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {

    const removerItemDaLista = () => {
        const novaLista = [...listaMercado];
        const novaListaFiltrada = novaLista.filter((itemAtual) => itemAtual !== itemLista);

        setListaMercado(novaListaFiltrada);
    };


  return (
    <div className='flex items-center gap-3 p-2 justify-center'>
        <li className='flex items-center gap-3'>
            <p className='text-2xl'>{itemLista}</p>
            <button onClick={
              () => removerItemDaLista()}
              className="bg-red-600 text-white px-3 py-1 rounded-3xl"
              >
              X
              </button> 
        </li>
    </div>
  )
}

export default ItemLista
