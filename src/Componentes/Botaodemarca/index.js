import "./index.css";

// Cada item recebe externamente o nome, o caminho da imagem do produto, a categoria e o preço
export default function Botaodemarca ({caminhoimagem}) {
    return <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}>
        <img className="imgmarca" src={caminhoimagem} alt="Imagem botão marca">
        </img>
    </button>;
}