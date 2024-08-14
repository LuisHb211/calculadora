import "./Botao.css";

export function Botao({ color, background, text}){
    return(
        <button className="botao" style={{color: color, background: background}} onClick={onclick}>
            {text}
        </button>
    );
}