// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Botao} from "./components/botao/Botao";


function App() {
  //usa-se as aspas dentro de useState se nao iria somar os numero adicionados e nao apenas adicionar 
  //numeroUm eh a linha debaixo do 'display', numeroDois a linha de cima
  const [numeroUm, setNumeroUm] = useState("");
  const [sinal, setSinal] = useState("");
  const [numeroDois, setNumeroDois] = useState("");

  //botao chama a funcao e passa seu numero como parametro
  function adicionaNumero(x) {
    let num = numeroUm + x;
    setNumeroUm(num);
  }

  function conta(simbolo) {
    //Quando ja tem numero no numeroUm e numeroDois, assim ele faz a conta
    if (numeroUm !== "" && numeroDois !== ""){
      if (sinal === "/"){
        setNumeroDois(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (sinal === "+"){
        setNumeroDois(parseFloat(numeroDois) + parseFloat(numeroUm));
      } else if (sinal === "-"){
        setNumeroDois(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (sinal === "*"){
        setNumeroDois(parseFloat(numeroDois) * parseFloat(numeroUm));
      }  
      setSinal(simbolo);
      setNumeroUm("");
    } else{
      //Para quando nao tem numero no numeroDois, coloca o valor adicionando em numeroUm e passa para numeroDois
      setSinal(simbolo);
      setNumeroDois(numeroUm);
      setNumeroUm("");
    }
  }
  function resultado() {
    if (numeroUm !== "" && numeroDois !== "" && sinal !== "=") {
      if (sinal === "/") {
        setNumeroUm(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (sinal === "+") {
        setNumeroUm(parseFloat(numeroDois) + parseFloat(numeroUm));
      } else if (sinal === "-") {
        setNumeroUm(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (sinal === "*") {
        setNumeroUm(parseFloat(numeroDois) * parseFloat(numeroUm));
      }
      setNumeroDois("");
      setSinal("=");
    }
  }

  function limpar() {
    setNumeroUm("");
    setNumeroDois("");
    setSinal("");
  }
  function limparLinha() {
    setNumeroUm("");
  }
  


  return (
    <div className='container'>
      <div className='calculadora'>
        <div className='calculadoraHeader'>
          <p className='equacao'>{numeroDois}</p>
          <p className='resultado'> {sinal} {numeroUm}</p>
        </div>
        <div className='teclado'>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => limparLinha()} text={'CE'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => limpar()} text={'C'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'%'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick={() => conta("/")} text={"/"}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(7)} text={'7'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(8)} text={'8'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(9)} text={'9'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick={() => conta("*")} text={"x"}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(4)} text={'4'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(5)} text={'5'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(6)} text={'6'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick={() => conta("-")} text={"-"}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(1)} text={'1'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(2)} text={'2'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(3)} text={'3'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick={() => conta("+")} text={"+"}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => adicionaNumero(0)} text={'0'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'.'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick={() => resultado("=")} text={'='}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
