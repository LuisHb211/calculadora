// import logo from './logo.svg';
import './App.css';
import {Botao} from "./components/botao/Botao";

function App() {
  // const [numeroUm, set]

  return (
    <div className='container'>
      <div className='calculadora'>
        <div className='calculadoraHeader'>
          <p className='equacao'>9</p>
          <p className='resultado'>/3</p>
        </div>
        <div className='teclado'>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'CE'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'C'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'%'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick text={'/'}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'7'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'8'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'9'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick text={'x'}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'4'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'5'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'6'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick text={'-'}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'1'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'2'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'3'}/>
            <Botao color={'#339dff'} background={'#005db2'} onClick text={'+'}/>
          </div>
          <div className='linhas'>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'0'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'.'}/>
            <Botao color={'#a5a5a5'} background={'#616161'} onClick text={'='}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
