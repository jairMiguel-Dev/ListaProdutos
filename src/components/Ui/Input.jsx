import { forwardRef } from "react"

const Input = forwardRef (({ type = "text", placeholder = "", value, onChange, className = ""}, ref) => {
    return (
        <input 
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value} // Controla o valor do input
        onChange={onChange} //Atualiza o valor
        className={`bg-indigo-900 text-white placeholder-white flex-1 border border-white mask-origin-border rounded-3xl px-5 py-3 ${className}`}
        />
    )
})

export default Input;