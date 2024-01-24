import "./index.css";
// Import de imagens
import iconlogin from "../../imgs/iconlogin.png";

// Botão que direciona para a página de login/cadastro
export default function Loginb () {
    return <button className="fulllogin" onClick={() => alert("Página de login/cadastro aberta!")}>
        <img src={iconlogin} className="loginicon" alt="Simbolo de login"></img>
        <h1 className="textologin">Olá, faça seu login ou cadastre-se</h1>
    </button>;
}