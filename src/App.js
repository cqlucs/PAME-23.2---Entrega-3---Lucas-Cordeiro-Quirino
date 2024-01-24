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
  const listacompleta = {
    xiaomi: ["Xiaomi 13T Pro Aço", './imgs/xiaomi13tpro.png', "Celulares", "599,90"], 
    iphone: ["Iphone 12 Pro", './imgs/xiaomi13tpro.png', "Celulares", "699,90"]
  };

  const [textobusca, settexto] = useState("");
  const [lista, setLista] = useState([]);
  let listaatual = [];

  function atualizarbusca() {
    if (textobusca !== "") {
      listaatual = []
      for (var elemento in listacompleta) {
        console.log(elemento);
        if (listacompleta[elemento[0]].includes(textobusca)) {
          console.log(elemento, "FOI")
          listaatual.push(elemento);
        }
      }
    }
    else {
      listaatual = listacompleta;
    }
    console.log(lista)
  }

  function realizarbusca() {
    setLista([listaatual]);
    console.log(lista)
  }

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
          {/* {lista.map((item) => {
            return <Item nomedoprod={listacompleta[item[0]]} caminhoimagem={listacompleta[item[1]]} categoria={listacompleta[item[2]]} preco={listacompleta[item[3]]}></Item>;
          })} */}
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
          <Item caminhoimagem={xiaomifoto} nomedoprod="Xiaomi 13T Pro Aço" categoria="Celulares" preco="599,90"></Item>
        </div>
      </div>
    </div>
  );
}

export default App;
