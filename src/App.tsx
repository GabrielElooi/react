import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroCliente from './componentes/CadastroClientes';

function App() {

const empresa: string = "Supermercados Pic"

const site: string = "https://www.fleekcursos.com.br"

const rsCliente = {
  nome: "Gabriel",
  endereco: "Rua Guapé 1640"
}

const condicao: boolean = true


  return(
  <div className="App">
    <h1>{ empresa }</h1>
    {condicao && 
    <>
    <p>{10}</p>
    <p>{rsCliente.nome}</p>
    <p>{10 + 10 + 10}</p>
    <a href = {site} >Site Fleek</a>
    <CadastroCliente />
    <CadastroCliente />
    </>
    }
    <CadastroCliente />
  </div>
);
}

export default App;
