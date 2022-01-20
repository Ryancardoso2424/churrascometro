import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h3>Churrascomêtro</h3>
        <input id='adultos' type='Number' placeholder='Adultos'></input><br></br>
        <input id='criancas' type='Number' placeholder='Crianças'></input><br></br>
        <input id='bebidas' type='Number' placeholder='Bebidas'></input><br></br>
        <button className='bt'>Calcular</button>

        <div id='res'>

        </div>

      </div>
    </>
  );
}

export default App;
