// Imports técnicos
import './App.css';
import { useState } from 'react';

// Componentes importados
import Loginb from './Componentes/Loginb';
import Logofull from './Componentes/logofull';
import Barrabusca from './Componentes/Barrabusca';
import Item from './Componentes/Item';
import Sidebarb from './Componentes/SideBarB';
import Elementosfiltrar from './Componentes/Elementosfiltrar';

// Imports de imagens
import xiaomifoto from './imgs/xiaomi13tpro.png';

// Aplicativo em geral
function App() {
  // Essa é a lista completa de produtos, é uma lista de listas com as informações necessárias
  const listacompleta = [
    ["Xiaomi 13T Pro Aço", xiaomifoto, "Celulares", "599,90"], 
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Samsumg S23", xiaomifoto, "Celulares", "1099,90"],
    ["Xiaomi 13T", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"],
    ["Iphone 12 Pro", xiaomifoto, "Celulares", "699,90"]
  ];

  // Algumas variáveis com setState para a barra de busca funcionar
  const [textobusca, settexto] = useState("");
  const [listaitens, setLista] = useState(listacompleta);
  const [listaatual, setlistatemp] = useState(listacompleta);

  // Função para atualizar a lista temporária de busca, chamada sempre que algo é escrito na barra de busca.
  // Basicamente as informações da listaatual são informações temporárias e só confirmadas na tela após clicar no botão de busca.
  function atualizarbusca() {
    if (textobusca !== "") {
      let listanova = []
      setlistatemp([]);
      for (let elemento of listacompleta) {
        if (elemento[0].slice(0, textobusca.length) === textobusca) {
          listanova.push(elemento);
        }
        setlistatemp(listanova);
      }
    }
    else {
      setlistatemp(listacompleta);
    }
  }

  // Função para efetivamente realizar a busca e mudar os itens na tela, chamada quando clica-se no botão de busca
  function realizarbusca() {
    setLista(listaatual);
    if (textobusca === "") {
      setLista(listacompleta);
    }
  }

  // Variável com setState para esconder/mostrar a barra lateral
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <div className="header">
        <Sidebarb visible={visible} setVisible={setVisible}></Sidebarb>
        <Logofull></Logofull>
        <Loginb></Loginb>
      </div>
      <div className="main">
        {visible && <div className="sidebar">
          <Barrabusca textobusca={textobusca} settexto={settexto} realizarbusca={realizarbusca} atualizarbusca={atualizarbusca}></Barrabusca>
          <Elementosfiltrar></Elementosfiltrar>
        </div>}
        <div className="itensbar">
          {/* Aqui dentro vai cada um dos itens disponíveis para venda */}
          {listaitens.map((prod) => {
            return <Item nomedoprod={prod[0]} caminhoimagem={prod[1]} categoria={prod[2]} preco={prod[3]}></Item>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
