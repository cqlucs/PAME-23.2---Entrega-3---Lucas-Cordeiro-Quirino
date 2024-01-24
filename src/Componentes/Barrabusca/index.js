import "./index.css";
import searchphoto from "../../imgs/searchicon.png";

// Barra de busca e botão
export default function Barrabusca ({textobusca, settexto, realizarbusca, atualizarbusca}) {
    return <div className="fullbusca">
        <input className="buscainput" 
        type="search" 
        placeholder="Digite o item que deseja..." 
        value={textobusca} 
        onChange={(event) => {
            settexto(event.target.value); atualizarbusca(); console.log(textobusca)
            }}/>
        <button className="buscarb" onClick={realizarbusca}><img className="searchicon" src={searchphoto} alt="icone buscar"></img></button>
    </div>;
}