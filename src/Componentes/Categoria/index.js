import "./index.css";

// Cada item recebe externamente o nome, o caminho da imagem do produto, a categoria e o preço
export default function Categoria ({nomecategoria}) {
    return <div className="categoriadiv">
        <input className="checkcategoria" type="checkbox">
        </input>
        <p className="categorianome">
        {nomecategoria}
        </p>
        </div>;
}