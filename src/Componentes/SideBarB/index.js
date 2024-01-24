import "./index.css";
// Import de imagens
import sidebaricon from "../../imgs/sidebaricon.png";

// Botão para exibir/esconder a barra lateral (sidebar)
export default function Sidebarb ({visible, setVisible}) {
    return <button className="sbb" onClick={() => setVisible(!visible)}>
        <img src={sidebaricon} className="sidebaricone" alt="Icone da sidebar"></img>
        </button>;
}