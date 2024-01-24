import "./index.css";
// Import de imagens
import iconloja from "../../imgs/iconloja.png";

// Componente com a imagem ícone da loja+texto como título
export default function Logofull () {
    return <div className="fulllogo">
        <img src={iconloja} className="logoicon" alt="Logo da loja"></img>
        <h1 className="nomelogo">VariedadeTop</h1>
    </div>;
}