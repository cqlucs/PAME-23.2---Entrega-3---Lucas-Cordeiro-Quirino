import "./index.css";
// Import elemento
import Botaodemarca from "../Botaodemarca";
import Categoria from "../Categoria";
// Imports de imagens
import xiaomiicon from "../../imgs/xiaomilogo.png";
import lgicon from "../../imgs/lgicon.png";
import samsumgicon from "../../imgs/samsumgicon.png";
import lenovoicon from "../../imgs/lenovoicon.png";
import tramontinaicon from "../../imgs/tramontinaicon.png";

// Filtros para busca na barra lateral
export default function Elementosfiltrar () {
    const listamarcas = [xiaomiicon, lgicon,  samsumgicon, lenovoicon, tramontinaicon];
    const listacat = ["Celulares", "Utensílios", "TV", "Relógios", "Relógios", "Eletrodomésticos"];

    return <div className="fullfiltrarbusca">
        <h1 className="titulofiltros">Marcas Populares:</h1>
        <div className="botoesmarcas">
        {listamarcas.map((marca) => {
            return <Botaodemarca caminhoimagem={marca}>
            </Botaodemarca>;
          })}
        </div>
        <h1 className="titulofiltros">Categorias:</h1>
        <div className="botoescategorias">
        {listacat.map((cat) => {
            return <Categoria nomecategoria={cat}>
            </Categoria>;
          })}
        </div>
    </div>;
}