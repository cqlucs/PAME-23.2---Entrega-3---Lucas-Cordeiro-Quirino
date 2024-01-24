import "./index.css";
// Imports de imagens
import xiaomiicon from "../../imgs/xiaomilogo.png";
import lgicon from "../../imgs/lgicon.png";
import samsumgicon from "../../imgs/samsumgicon.png";
import lenovoicon from "../../imgs/lenovoicon.png";
import tramontinaicon from "../../imgs/tramontinaicon.png";

// Filtros para busca na barra lateral
export default function Elementosfiltrar () {
    return <div className="fullfiltrarbusca">
        <h1 className="titulofiltros">Marcas Populares:</h1>
        <div className="botoesmarcas">
            <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}><img className="imgmarca" src={xiaomiicon} alt="botão xiaomi"></img></button>
            <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}><img className="imgmarca" src={lgicon} alt="botão lg"></img></button>
            <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}><img className="imgmarca" src={samsumgicon} alt="botão samsumg"></img></button>
            <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}><img className="imgmarca" src={lenovoicon} alt="botão lenovo"></img></button>
            <button className="botaomarca" onClick={() => alert("Página filtrada pela marca!")}><img className="imgmarca" src={tramontinaicon} alt="botão tramontina"></img></button>
        </div>
        <h1 className="titulofiltros">Categorias:</h1>
        <div className="botoescategorias">
            <div className="categoriadiv"><input className="checkcategoria" type="checkbox"></input><p className="categorianome">Celulares</p></div>
            <div className="categoriadiv"><input className="checkcategoria" type="checkbox"></input><p className="categorianome">Utensílios</p></div>
            <div className="categoriadiv"><input className="checkcategoria" type="checkbox"></input><p className="categorianome">TV</p></div>
            <div className="categoriadiv"><input className="checkcategoria" type="checkbox"></input><p className="categorianome">Relógios</p></div>
            <div className="categoriadiv"><input className="checkcategoria" type="checkbox"></input><p className="categorianome">Eletrodomésticos</p></div>
        </div>
    </div>;
}