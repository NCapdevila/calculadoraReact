import './App.css';
import Button from './Componets/Button';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
