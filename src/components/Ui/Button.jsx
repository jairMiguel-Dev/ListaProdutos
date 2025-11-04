export default function Button({ children, onClick, type = "button", className = "" }) { // Componente de botão reutilizável
    return ( 
        <button
        type={type} 
        onClick={onClick} // Manipulador de clique passado como prop
        className={`bg-green-600 text-white px-3 py-1 rounded-3xl ${className}`} // Estilização básica do botão com Tailwind CSS
        >
        {children}
        </button>
    )
}