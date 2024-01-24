import "./index.css";

// Cada item recebe externamente o nome, o caminho da imagem do produto, a categoria e o preço
export default function Item ({nomedoprod, caminhoimagem, categoria, preco}) {
    return <button className="fullitem" onClick={() => alert("Página do item aberta!")}>
        <img className="itemimg" src={caminhoimagem} alt="Imagem do item"></img>
        <p className="categoriaitem">{categoria}</p>
        <p className="nomeitem">{nomedoprod}</p>
        <p className="precoitem">R${preco}</p>
    </button>;
}